import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Themes"
import { GlobalStyles } from "./globalStyles";
import NavBar from "./navBar/NavBar";

export default function Layout() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <NavBar themeToggler={themeToggler}/>

        <Outlet />
      </Container>
    </ThemeProvider>
  );
}
