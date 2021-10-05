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
     
        <Dashboard></Dashboard>
      </Main>
      <Footer>Copyright {new Date().getFullYear()} &copy; Spark Academy{" "}</Footer>
    </ThemeProvider>
  );
}

export default App;
