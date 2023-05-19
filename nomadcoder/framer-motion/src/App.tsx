import styled from "styled-components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(0, 186, 238, 0.78),
    rgb(221, 0, 238)
  );
`;
const Box = styled(motion.div)`
  height: 200px;
  background-color: whitesmoke;
  border-radius: 15px;
  font-size: 28px;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleClicked}>
      <Grid>
        <Box layoutId="select" />
        <Box />
        <Box />
        <Box />
      </Grid>
      <AnimatePresence>
        {clicked ? (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box layoutId="select" style={{ width: 500, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;