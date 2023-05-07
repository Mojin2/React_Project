import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const animation = keyframes`//keyframes를 이용한 animation component
  0%{
    transform:rotate(0deg);
  } 
  50%{
    transform:rotate(360deg);
  }
  100%{
    transform:rotate(0deg);
    
  }
`;

const Emoji = styled.span`
  font-size: 100px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation} 5s linear infinite; //animation
  ${Emoji} {
    //styledcomponent안에서 child target가능
    &:hover {
      //&을 통한 hover (pseudo selector)
      font-size: 150px;
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
    // <Wrapper>
    //   <Box>
    //     <Emoji>🐷</Emoji>
    //   </Box>
    // </Wrapper>
    //////////////////////////////
    // <Wrapper>
    //   <Box bgColor="teal" />
    //   <Circle as="button" bgColor="tomato" />
    //   <Input />
    //   <Input />
    // </Wrapper>
  );
}

export default App;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
//
// `;

// const Circle = styled(Box)`;
//   border-radius: 50px;
//   border: none;
//   cursor: pointer;
// `;

// const Input = styled.input.attrs({ required: true, minLength: 10 })`
//   background-color: white;
// `;
