import styled from "styled-components";
import { CATALOG, DASHBOARD } from "../shared/routes";

const FluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 7.5em;
  margin-bottom: 0;
`;
const Subtitle = styled.h6`
  font-size: 2.5em;
  margin-top: 0;
`;
const Navlinkk = styled.a`
  text-decoration: none;
  font-size:1.5em;
`;
const NotFound = () => (
  <FluidContainer>
    <Title>404!</Title>
    <br />
    <Subtitle>The Page are looking for doesn't exist</Subtitle>
    <Subtitle>Valid Link &gt;&gt; <Navlinkk href={DASHBOARD}>Dashboard</Navlinkk></Subtitle>
    <Subtitle>Valid Link &gt;&gt; <Navlinkk href={CATALOG}>Catalog</Navlinkk></Subtitle>
    
  </FluidContainer>
);

export default NotFound;
// <h1>404</h1>
//<NavLink href={CATALOG}>Catalog</NavLink>