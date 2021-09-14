import React from "react";
import { Header, Main, Footer } from "./components/Layout";
import { Navbar, NavItem, NavLink } from "./components/Navbar";
function App() {
  return (
    <>
      <Header>
        <Navbar>
          <NavItem>
          <NavLink href="#">Catalog</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="#">Dashboard</NavLink>
          </NavItem>
          </Navbar>
      </Header>
      
      <Main>This is main.</Main>
      <Footer>Thi is footer.</Footer>
    </>
  );
}

export default App;
