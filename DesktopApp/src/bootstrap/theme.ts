import { extendBaseTheme, theme } from "@chakra-ui/react";
import { articleStyles } from "../pages/Articles";

const customTheme = extendBaseTheme({
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "neue-haas-grotesk-display",
    heading: "neue-haas-grotesk-display",
    mono: "neue-haas-grotesk-display",
  },
  fontSizes: {
    xxs: "8px",
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    xxl: "22px",
    xxxl: "24px",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 600,
    semibold: 700,
    bold: 900,
  },
  colors: {
    brand: {
      main: "#00B8B1",
      red: "#C53030",
      link: "#3182CE",
      gray: "#718096",
      black: "#000"
    },
    ...articleStyles,
  },
});

export default customTheme;
