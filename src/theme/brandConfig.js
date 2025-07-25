// Brand configuration from https://baseline.is/brand/Px5o56d8ymmuDGHx5DmuPE/

export const brandConfig = {
  // Company info
  name: "Questera",
  tagline: "AI-Powered Coaching for Tech Professionals",
  
  // Colors - Primary palette
  colors: {
    primary: {
      main: "#7B61FF",  // Vibrant purple
      light: "#9F8BFF",
      dark: "#5A46CC",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#00C2FF",  // Bright cyan
      light: "#66D9FF",
      dark: "#0097CC",
      contrastText: "#FFFFFF"
    },
    accent: {
      main: "#FF5757",  // Coral red
      light: "#FF8A8A",
      dark: "#CC4545",
      contrastText: "#FFFFFF"
    },
    // Neutral palette
    neutral: {
      black: "#121212",
      darkGray: "#2D2D2D",
      gray: "#717171",
      lightGray: "#E5E5E5",
      white: "#FFFFFF"
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
      default: "#F8F9FC",
      paper: "#FFFFFF",
      dark: "#121212"
    }
  },
  
  // Typography
  typography: {
    fontFamily: {
      heading: "'Poppins', sans-serif", // Modern, geometric sans-serif
      body: "'Inter', sans-serif" // Clean, neutral sans-serif
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
    alt: "Questera Logo",
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
    twitter: "https://twitter.com/questera",
    linkedin: "https://linkedin.com/company/questera",
    instagram: "https://instagram.com/questera",
    facebook: "https://facebook.com/questera"
  }
};

export default brandConfig;