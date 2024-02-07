/* eslint-disable arrow-body-style */
import { ThemeProvider, createTheme } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

const MaterialThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const theme = createTheme({
    direction: lang === "ar" ? "rtl" : "ltr",
  });

  return (
    <ThemeProvider theme={theme}>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default MaterialThemeProvider;
