import React from "react";
import { ThemeProvider } from "styled-components";
import { BsBookHalf } from "react-icons/bs";

import { Main, Footer } from "./components/Layout";
import { Navbar, NavItem, NavLink } from "./components/Navbar";

import Dashboard from "./containers/Dashboard";

function App() {
  const theme = {
    primary: {
      main: "#29b6f6",
      light: "#73e8ff",
      dark: "#0086c3",
      textColor: "#000",
    },
    secondary: {
      main: "#fff",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <NavItem>
          <NavLink>
            <BsBookHalf></BsBookHalf>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Catalog</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Dashboard</NavLink>
        </NavItem>
      </Navbar>

      <Main>
        This is main.
        <Dashboard></Dashboard>
      </Main>
      <Footer>This is footer.</Footer>
    </ThemeProvider>
  );
}

export default App;
