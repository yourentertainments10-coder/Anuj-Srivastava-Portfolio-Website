/**
 * Design Tokens
 * Usage: import { colors, typography, spacing, motion } from './designTokens';
 */


export const colors = {
  // Primary
  ink: '#111111',
  muted: '#5f6765',

  // Background
  paper: '#f5f7f8',
  panel: '#ffffff',

  // Borders & Lines
  line: '#deded8',

  // Accent Colors
  teal: '#0f766e',
  coral: '#ea6a47',
  gold: '#b48a2c',
  graphite: '#263331',

  // Semantic Colors
  success: '#059669',
  warning: '#d97706',
  error: '#dc2626',
  info: '#0284c7',

  // Transparency Variants
  tealLight: 'rgba(15, 118, 110, 0.08)',
  tealMedium: 'rgba(15, 118, 110, 0.22)',
  tealStrong: 'rgba(15, 118, 110, 0.42)',

  coralLight: 'rgba(234, 106, 71, 0.08)',
  coralMedium: 'rgba(234, 106, 71, 0.24)',

  // Glass Effect
  glassBg: 'rgba(248, 248, 245, 0.94)',
  glassBorder: 'rgba(22, 32, 31, 0.08)',
};

// ============================================================================
// TYPOGRAPHY SCALE
// ============================================================================

export const typography = {
  // Font Families
  fontFamily: {
    sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },

  // Font Sizes (rem)
  fontSize: {
    xs: '0.75rem',      // 12px
    sm: '0.82rem',      // 13px
    base: '0.88rem',    // 14px
    md: '1rem',         // 16px
    lg: '1.08rem',      // 17px
    xl: '1.2rem',       // 19px
    '2xl': '1.35rem',   // 22px
    '3xl': '2rem',      // 32px
    '4xl': '2.35rem',   // 38px
    '5xl': '3.2rem',    // 51px
    '6xl': '3.5rem',    // 56px
    '7xl': '4rem',      // 64px
    '8xl': '6.1rem',    // 98px
  },

  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  // Line Heights
  lineHeight: {
    tight: 1.0,
    snug: 1.2,
    normal: 1.45,
    relaxed: 1.75,
    loose: 2.0,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
  },
};

// ============================================================================
// SPACING SCALE
// ============================================================================

export const spacing = {
  // Base unit: 4px
  0: '0',
  1: '4px',    // 0.25rem
  2: '8px',    // 0.5rem
  3: '12px',   // 0.75rem
  4: '16px',   // 1rem
  5: '20px',   // 1.25rem
  6: '24px',   // 1.5rem
  7: '28px',   // 1.75rem
  8: '32px',   // 2rem
  9: '36px',   // 2.25rem
  10: '40px',  // 2.5rem
  11: '44px',  // 2.75rem
  12: '48px',  // 3rem
  14: '56px',  // 3.5rem
  16: '64px',  // 4rem
  20: '80px',  // 5rem
  24: '96px',  // 6rem

  // Semantic Spacing
  section: '82px',
  sectionMobile: '58px',
  container: '1120px',
  containerWide: '1280px',
  headerHeight: '75px',
};

// ============================================================================
// BORDER RADIUS
// ============================================================================

export const borderRadius = {
  none: '0',
  sm: '4px',
  DEFAULT: '8px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  full: '999px',
};

// ============================================================================
// SHADOW SYSTEM
// ============================================================================

export const shadows = {
  none: 'none',

  // Subtle
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',

  // Default Card
  DEFAULT: '0 8px 24px rgba(0, 0, 0, 0.05)',

  // Elevated Card (hover)
  md: '0 20px 50px rgba(0, 0, 0, 0.12)',

  // Large / Hero
  lg: '0 32px 80px rgba(31, 43, 39, 0.18)',

  // Button specific
  button: '0 4px 12px rgba(0, 0, 0, 0.1)',
  buttonHover: '0 8px 20px rgba(0, 0, 0, 0.15)',

  // Navigation
  nav: '0 2px 8px rgba(0, 0, 0, 0.06)',
  navScrolled: '0 4px 16px rgba(0, 0, 0, 0.1)',
};

// ============================================================================
// MOTION & ANIMATION
// ============================================================================

export const motion = {
  // Durations (milliseconds)
  duration: {
    instant: 100,
    fast: 150,
    normal: 250,
    slow: 350,
    slower: 500,
    slowest: 700,
  },

  // Easing curves
  easing: {
    // Smooth, professional feel
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',

    // Slight bounce for interactive elements
    bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',

    // Standard ease
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  },

  // Transition presets for common properties
  transitions: {
    // Fast interactions (buttons, links)
    interactive: 'transform 150ms ease, border-color 180ms ease, background 180ms ease',

    // Card hover effects
    card: 'transform 0.3s ease, box-shadow 0.3s ease',

    // Section fade-in
    section: 'opacity 0.6s ease, transform 0.6s ease',

    // Page transitions
    page: 'opacity 0.5s ease, transform 0.5s ease',
  },
};

// ============================================================================
// BREAKPOINTS
// ============================================================================

export const breakpoints = {
  // Mobile first - these match CSS breakpoints
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '920px',
  xl: '1024px',
  '2xl': '1280px',
  '3xl': '1536px',

  // Semantic breakpoints
  mobile: '640px',
  tablet: '920px',
  laptop: '1024px',
  desktop: '1280px',
};

// ============================================================================
// COMPONENT TOKENS
// ============================================================================

export const components = {
  // Button Tokens
  button: {
    height: {
      sm: '40px',
      md: '46px',
      lg: '52px',
    },
    padding: {
      sm: '0 13px',
      md: '0 18px',
      lg: '0 24px',
    },
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.bold,
    borderRadius: borderRadius.DEFAULT,
    gap: '9px',
    transition: motion.transitions.interactive,
  },

  // Card Tokens
  card: {
    borderRadius: borderRadius.DEFAULT,
    padding: '24px',
    paddingCompact: '22px',
    shadow: shadows.DEFAULT,
    shadowHover: shadows.md,
    transition: motion.transitions.card,
  },

  // Input Tokens
  input: {
    height: '46px',
    padding: '0 16px',
    fontSize: typography.fontSize.md,
    borderRadius: borderRadius.DEFAULT,
  },

  // Badge Tokens
  badge: {
    padding: '8px 12px',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.extrabold,
    borderRadius: borderRadius.full,
  },

  // Section Tokens
  section: {
    maxWidth: '1120px',
    maxWidthWide: '1280px',
    padding: '82px 0',
    paddingMobile: '58px 0',
    margin: '0 auto',
  },
};

// ============================================================================
// Z-INDEX SCALE
// ============================================================================

export const zIndex = {
  background: -1,
  base: 0,
  content: 1,
  dropdown: 100,
  sticky: 200,
  navbar: 300,
  modal: 400,
  popover: 500,
  tooltip: 600,
  toast: 700,
};

// ============================================================================
// OPACITY
// ============================================================================

export const opacity = {
  0: 0,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  100: 1,

  // Semantic
  disabled: 0.5,
  hover: 0.8,
  overlay: 0.6,
  backdrop: 0.94,
};

// ============================================================================
// BLUR
// ============================================================================

export const blur = {
  none: '0',
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '18px',
  '2xl': '24px',
  // Glassmorphism
  glass: '18px',
};

// ============================================================================
// LAYOUT
// ============================================================================

export const layout = {
  // Container widths
  container: '1120px',
  containerWide: '1280px',
  containerNarrow: '900px',

  // Content widths
  contentWidth: '1120px',
  contentPadding: '18px',
  contentPaddingMobile: '14px',

  // Section widths
  sectionWidth: '1120px',
  heroWidth: '1280px',

  // Grid
  projectCardWidth: '360px',
  skillCardWidth: '280px',

  // Header
  headerHeight: '75px',
  headerHeightMobile: 'auto',
};

// ============================================================================
// ANIMATION PRESETS (Framer Motion compatible)
// ============================================================================

export const animations = {
  // Fade Up
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },

  // Fade Down
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },

  // Fade In
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },

  // Scale
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  },

  // Slide Left
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },

  // Slide Right
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },

  // Stagger children
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },

  // Card hover
  cardHover: {
    rest: {
      y: 0,
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)',
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },
};

// ============================================================================
// REDUCED-MOTION VARIANTS
// ============================================================================

/**
 * Mirrors the keys in `animations` so components can swap the whole object
 * when the user has requested reduced motion, instead of dropping animation
 * per call site. Movement/scale is stripped; only opacity remains.
 */
export const reducedAnimations = {
  fadeUp: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  },
  fadeDown: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  },
  scale: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  },
  slideLeft: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  },
  slideRight: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0 } },
  },
};

// ============================================================================
// SCROLL REVEAL DEFAULTS
// ============================================================================

/**
 * Shared `whileInView` viewport config so every section reveals at the same
 * point in the scroll instead of triggering right at the edge.
 */
export const viewport = {
  once: true,
  amount: 0.2,
};

// ============================================================================
// INTERACTION PRESETS
// ============================================================================

export const interactions = {
  tap: { scale: 0.97 },
  tapTransition: { type: 'spring', stiffness: 420, damping: 30 },
  navIndicator: { type: 'spring', stiffness: 380, damping: 32 },
  scrollProgress: { stiffness: 300, damping: 40, restDelta: 0.001 },
};

// ============================================================================
// ACCESSIBILITY
// ============================================================================

export const accessibility = {
  // Minimum touch targets (WCAG)
  minTouchTarget: '44px',

  // Focus indicators
  focusRing: {
    offset: '2px',
    color: colors.teal,
    style: 'solid',
  },

  // Minimum contrast ratios (WCAG AA)
  contrast: {
    // Text
    textLarge: 3.0,
    textNormal: 4.5,

    // UI Components
    uiNormal: 3.0,
    uiLarge: 3.0,
  },

  // Reduced motion
  reducedMotion: '@media (prefers-reduced-motion: reduce)',
};

// ============================================================================
// EXPORT DEFAULT THEME
// ============================================================================

/**
 * Complete theme object for potential use with CSS-in-JS solutions
 * or theme providers
 */
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  motion,
  breakpoints,
  components,
  accessibility,
  zIndex,
  opacity,
  blur,
  layout,
  animations,
};

export default theme;