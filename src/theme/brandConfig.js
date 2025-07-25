// Brand configuration from https://baseline.is/brand/Px5o56d8ymmuDGHx5DmuPE/

export const brandConfig = {
  // Company info
  name: "WitVoices",
  tagline: "Find Your Voice.",
  
  // Colors - Primary palette
  colors: {
    primary: {
      main: "#2f0070",  // deep purple
      light: "#2f0070",
      dark: "#1d0045",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#903fff",  // Bright cyan
      light: "#e4d1ff",
      dark: "#59279e",
      contrastText: "#FFFFFF"
    },
    accent: {
      main: "#f23d3d",  // vivaldi red
      light: "#f9acac",
      dark: "#c43131",
      contrastText: "#FFFFFF"
    },
    // Neutral palette
    neutral: {
      black: "#04000a",
      darkGray: "#343039",
      gray: "#3d322e",
      lightGray: "#9e8076",
      white: "#FFCFBE"
    },
    // Semantic colors
    semantic: {
      success: "#4CAF50",
      warning: "#FFC107",
      error: "#FF5757",
      info: "#2196F3"
    },
    // Background colors
    background: {
      default: "#FFCFBE",
      paper: "#FFFFFF",
      dark: "#2f0070"
    }
  },
  
  // Typography
  typography: {
    fontFamily: {
      heading: "'urbanist', sans-serif", // Modern, geometric sans-serif
      body: "'josefina-sans', sans-serif" // Clean, neutral sans-serif
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  // Logo
  logo: {
    main: "/logo.svg", // Path to logo
    alt: "WitVoices Logo",
    width: 140,
    height: 40
  },
  
  // Spacing and sizing
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem"
  },
  
  // Border radius
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
    full: "9999px"
  },
  
  // Shadows
  shadows: {
    small: "0 1px 3px rgba(0, 0, 0, 0.1)",
    medium: "0 4px 6px rgba(0, 0, 0, 0.1)",
    large: "0 10px 15px rgba(0, 0, 0, 0.1)"
  },
  
  // Social media
  socialMedia: {
    twitter: "https://twitter.com/WitVoices",
    linkedin: "https://linkedin.com/company/WitVoices",
    instagram: "https://instagram.com/WitVoices",
    facebook: "https://facebook.com/WitVoices"
  }
};

export default brandConfig;