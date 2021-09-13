import styled from "styled-components/";

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: yellow;
`;

function App() {
  return (
    <Wrapper>
      <Title>It's gonna awesome!</Title>
    </Wrapper>
  );
}

export default App;
