import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes";
import { GlobalStyles } from "./globalStyles";
import NavBar from "./navBar/NavBar";
import { useTranslation } from "react-i18next";

export default function Layout() {
  const { t, i18n } = useTranslation();

  const lngs = {
    ua: { nativeName: "Укр" },
    en: { nativeName: "Eng" },
  };

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <NavBar themeToggler={themeToggler} />
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
        <p>{t("Welcome to React")}</p>

        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
