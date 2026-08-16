import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  GraduationCap,
  ImageIcon,
  Linkedin,
  Lock,
  Mail,
  Moon,
  Plus,
  Sun,
} from "lucide-react";

import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useState, useEffect, useLayoutEffect, useRef } from "react";

import {
  about,
  certifications,
  education,
  experience,
  footerNote,
  navItems,
  profile,
  projects,
  skillGroups,
} from "./portfolioData.js";

import { animations, reducedAnimations, viewport, interactions } from "./designTokens.js";

function Button({ className = "", children, ...rest }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      className={`button ${className}`.trim()}
      whileTap={prefersReducedMotion ? undefined : interactions.tap}
      transition={interactions.tapTransition}
      {...rest}
    >
      {children}
    </motion.a>
  );
}

function FadeImage({ src, alt, className = "", eager = false }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={`fade-img ${loaded ? "is-loaded" : ""} ${className}`.trim()}
      onLoad={() => setLoaded(true)}
    />
  );
}

/* Screenshot or looping video for a project. Falls back to a titled panel
   while `media` is null — see README § "Adding your photos and videos". */
function ProjectMedia({ project }) {
  if (project.media?.type === "video") {
    return (
      <div className="project-shot">
        <video
          src={project.media.src}
          autoPlay
          muted
          loop
          playsInline
          aria-label={`${project.title} demo`}
        />
      </div>
    );
  }

  if (project.media?.type === "image") {
    return (
      <div className="project-shot">
        <FadeImage src={project.media.src} alt={`${project.title} screenshot`} />
      </div>
    );
  }

  return (
    <div className="project-shot media-placeholder" aria-hidden="true">
      <ImageIcon size={20} />
      <span>{project.title}</span>
    </div>
  );
}

function SectionLabel({ index, children }) {
  return (
    <div className="section-heading">
      <span className="section-index">{String(index).padStart(2, "0")}</span>
      <h2>{children}</h2>
    </div>
  );
}

function useTheme() {
  // Dark is the deliberate default; only a previous explicit toggle overrides it.
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const stored = window.localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ x: 0, y: 0, width: 0, opacity: 0 });
  const [theme, toggleTheme] = useTheme();

  const prefersReducedMotion = useReducedMotion();
  const anim = prefersReducedMotion ? reducedAnimations : animations;

  const navRef = useRef(null);
  const linkRefs = useRef({});

  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, interactions.scrollProgress);

  const featuredProjects = projects.filter((p) => p.featured);
  const moreProjects = projects.filter((p) => !p.featured);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeEl = linkRefs.current[activeSection];
      const navEl = navRef.current;
      if (!activeEl || !navEl) {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }
      const navRect = navEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        x: linkRect.left - navRect.left,
        y: linkRect.bottom - navRect.top - 2,
        width: linkRect.width,
        opacity: 1,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    window.addEventListener("load", updateIndicator);
    return () => {
      window.removeEventListener("resize", updateIndicator);
      window.removeEventListener("load", updateIndicator);
    };
  }, [activeSection]);

  return (
    <>
      <motion.div
        className="scroll-progress"
        style={{ scaleX: progressScaleX }}
        aria-hidden="true"
      />

      <a className="skip-link" href="#projects">
        Skip to projects
      </a>

      <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="Anuj Srivastava — home">
          <span className="brand-mark">AS</span>
          <span className="brand-path">~/{profile.handle}</span>
        </a>

        <div className="header-right">
          <nav aria-label="Primary navigation" ref={navRef}>
            <motion.span
              className="nav-indicator"
              animate={{
                x: indicatorStyle.x,
                y: indicatorStyle.y,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
              }}
              transition={prefersReducedMotion ? { duration: 0 } : interactions.navIndicator}
            />
            {navItems.map((item, i) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  ref={(el) => {
                    linkRefs.current[id] = el;
                  }}
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                >
                  <span className="nav-num">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </div>
      </header>

      <main>
        <motion.section
          id="home"
          className="hero section-shell"
          variants={anim.fadeIn}
          initial="hidden"
          animate="visible"
        >
          <span className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            {profile.availability}
          </span>

          <motion.h1 variants={anim.fadeUp} initial="hidden" animate="visible">
            {profile.name}
          </motion.h1>

          <motion.p
            className="hero-role"
            variants={anim.fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08 }}
          >
            {profile.role} · {profile.degreeLine} · {profile.location}
          </motion.p>

          <motion.p
            className="summary"
            variants={anim.fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.16 }}
          >
            {profile.positioning}
          </motion.p>

          <motion.div
            className="actions"
            variants={anim.fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.24 }}
          >
            <Button className="primary" href={profile.resumeUrl} download>
              <Download size={18} aria-hidden="true" />
              Resume
            </Button>
            <Button href={profile.githubUrl} target="_blank" rel="noreferrer">
              <Github size={18} aria-hidden="true" />
              GitHub
            </Button>
            <Button href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" />
              {profile.email}
            </Button>
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          className="section-shell projects-section"
          variants={anim.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel index={1}>Projects</SectionLabel>

          <motion.div
            className="project-grid"
            variants={anim.stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {featuredProjects.map((project) => (
              <motion.article
                className="project-card"
                key={project.title}
                variants={anim.fadeUp}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : { y: -8, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }
                }
              >
                <ProjectMedia project={project} />
                <div className="project-body">
                  <div className="project-topline">
                    <span>{project.tag}</span>
                    {project.note && (
                      <span className="project-note">
                        <Lock size={11} aria-hidden="true" />
                        {project.note}
                      </span>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-oneliner">{project.oneLiner}</p>
                  <p className="project-story">{project.story}</p>

                  {project.metrics && (
                    <dl className="project-metrics">
                      {project.metrics.map((m) => (
                        <div key={m.label}>
                          <dt>{m.value}</dt>
                          <dd>{m.label}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  <div className="stack-list">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>

                  {(project.repoUrl || project.liveUrl) && (
                    <div className="project-actions">
                      {project.liveUrl && (
                        <Button
                          className="small"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowUpRight size={16} aria-hidden="true" />
                          Live demo
                        </Button>
                      )}
                      {project.repoUrl && (
                        <Button
                          className="small"
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Github size={16} aria-hidden="true" />
                          Code
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>

          {moreProjects.length > 0 && (
            <div className="more-projects">
              <button
                type="button"
                className="more-toggle"
                onClick={() => setShowAllProjects((v) => !v)}
                aria-expanded={showAllProjects}
                aria-controls="more-projects-list"
              >
                <Plus
                  size={16}
                  aria-hidden="true"
                  className={showAllProjects ? "is-open" : ""}
                />
                {showAllProjects
                  ? "Show fewer projects"
                  : `Show all ${projects.length} projects`}
              </button>

              <AnimatePresence initial={false}>
                {showAllProjects && (
                  <motion.ul
                    id="more-projects-list"
                    className="project-list"
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    animate={
                      prefersReducedMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }
                    }
                    exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {moreProjects.map((project) => (
                      <li key={project.title}>
                        <div className="list-head">
                          <h3>{project.title}</h3>
                          <span className="list-tag">{project.tag}</span>
                          {project.note && (
                            <span className="project-note">
                              <Lock size={11} aria-hidden="true" />
                              {project.note}
                            </span>
                          )}
                        </div>
                        <p>{project.oneLiner}</p>
                        <div className="list-foot">
                          <div className="stack-list">
                            {project.stack.map((item) => (
                              <span key={item}>{item}</span>
                            ))}
                          </div>
                          {project.repoUrl && (
                            <a
                              className="text-link"
                              href={project.repoUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Code <ArrowUpRight size={14} aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          )}
        </motion.section>

        <motion.section
          id="skills"
          className="section-shell"
          variants={anim.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel index={2}>Skills</SectionLabel>
          <motion.div
            className="skill-group-grid"
            variants={anim.stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {skillGroups.map((group) => (
              <motion.article className="skill-group" key={group.title} variants={anim.fadeUp}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="experience"
          className="section-shell"
          variants={anim.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel index={3}>Experience &amp; Education</SectionLabel>

          <div className="experience-column">
            <div className="timeline">
              {experience.map((item) => (
                <motion.article
                  key={`${item.role}-${item.company}`}
                  variants={anim.fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                  <ul className="feature-list">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </motion.article>
              ))}

              <motion.article
                variants={anim.fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <p className="timeline-period">{education.period}</p>
                <h3>
                  <GraduationCap size={18} aria-hidden="true" /> {education.degree}
                </h3>
                <span>{education.institution}</span>
              </motion.article>
            </div>

            <div className="cert-inline">
              <h3>Certifications</h3>
              <ul>
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                      {cert.name} — {cert.issuer}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="section-shell about-section"
          variants={anim.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel index={4}>{about.heading}</SectionLabel>
          <div className={`about-content ${about.photo ? "has-photo" : ""}`}>
            {about.photo && (
              <div className="about-photo">
                <FadeImage src={about.photo} alt={about.photoAlt} />
              </div>
            )}
            <div className="about-text">
              {about.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              {about.facts && (
                <dl className="about-facts">
                  {about.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="section-shell"
          variants={anim.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <SectionLabel index={5}>Contact</SectionLabel>
          <div className="contact">
            <div>
              <h3 className="contact-title">Let's build something useful.</h3>
              <p>
                {profile.availability}. The fastest way to reach me is email —{" "}
                <a className="text-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </p>
            </div>
            <div className="contact-actions">
              <Button className="primary" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" />
                Email
              </Button>
              <Button href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </Button>
              <Button href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Github size={18} aria-hidden="true" />
                GitHub
              </Button>
              <Button href={profile.resumeUrl} download>
                <FileText size={18} aria-hidden="true" />
                Resume
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Anuj Srivastava</p>
        <span>{footerNote}</span>
      </footer>
    </>
  );
}

export default App;
