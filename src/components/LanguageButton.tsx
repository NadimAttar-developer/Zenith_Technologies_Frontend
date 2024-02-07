/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

function LanguageButton() {
  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback(() => {
    if (i18n.language === "ar") {
      i18n.changeLanguage("en");
      window.localStorage.setItem("Localelanguage", "en");
    } else {
      i18n.changeLanguage("ar");
      window.localStorage.setItem("Localelanguage", "ar");
    }
  }, [i18n.language]);

  return (
    <Box
      component="div"
      onClick={handleChangeLanguage}
      sx={{ cursor: "pointer" }}
    >
      {i18n.language === "ar" ? "EN" : "AR"}
    </Box>
  );
}

export default LanguageButton;
