import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
const Wrapper = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  font-size: 28px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
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
const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};
const Circle = styled(motion.div)`
  background-color: whitesmoke;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
const box = {
  hover: (custom: number) => {
    return {};
  },
};
function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((cur) => !cur);
  return (
    <Wrapper>
      <Grid>
        <Box
          custom={1}
          variants={box}
          whileHover="hover"
          onClick={() => setId("1")}
          key={"1"}
          layoutId={"1"}
        />
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          variants={box}
          custom={4}
          whileHover="hover"
          onClick={() => setId("4")}
          key={"4"}
          layoutId={"4"}
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{ background: "white", width: 400, height: 200 }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <button
        style={{ marginTop: "30px", padding: "10px 20px", fontSize: "18px" }}
        onClick={toggleClicked}
      >
        Switch
      </button>
    </Wrapper>
  );
}

export default App;
