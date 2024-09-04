import { createTheme } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

export const getTheme = (prefersDarkMode: boolean): Theme =>
  createTheme({
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
    },
  });
