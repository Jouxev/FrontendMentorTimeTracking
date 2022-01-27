import { Main } from "./Components";
import { mobile } from "./responsive";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({
    height: "fit-content",
  })}
`;
function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
