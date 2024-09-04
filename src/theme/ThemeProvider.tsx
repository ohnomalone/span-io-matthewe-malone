import { ReactNode, useMemo } from "react";
import { getTheme } from "./theme";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";

export const ThemeConfigProvider = ({ children }: { children: ReactNode }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(() => getTheme(prefersDarkMode), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
