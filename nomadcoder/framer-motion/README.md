# ReactJS Framer motion 애니메이션

Framer motion library연습
<br><br>

## 🖥️ 프로젝트 소개

- 애니메이션 기능 연습

### ⏱️ 프로젝트 기간

- 2023.5.18 ~

### ⚙️ 프로젝트 환경

- **react** 18.2.0
- **framer-motion** 10.12.12

### 🗓️ 프로젝트 진행

- animation 적용 ✅
  <br><br><br>

# Other tips

## ❗️ React 프로젝트 생성 with TypeScript

    npx create-react-app app --template typescript
    npm i styled-components
    npm i --save-dev @types/styled-components
    npm i recoil

## ❗️ How to use Framer motion

    npm i framer-motion
    import {motion} from "framer-motion"

- Components props로 설정

```
<Box
    transition={{ type: "spring", delay: 1 }}
    initial={{ scale: 0 }}
    animate={{ scale: 1, rotateZ: 360 }}
/>
```

- Varients로 설정

```
const myVars = {
  start: { scale: 0 },
  end: { scale: 1, rotateZ: 360, transition: { type: "spring", delay: 1 } },
};
<Box variants={myVars} initial="start" animate="end" />
```

### Props

- child는 parent의 variants와 initial,animate를 자동으로 받음
- parent varients에서 child varients 조절 가능

```
const boxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5, //child의 딜레이
      staggerChildren: 0.15, //child 요소들 각각의 딜레이
    },
  },
};
```

- hover & click

```
const boxVariants = {
  start: {},
  end: {},
  hover: { scale: 1.5, rotateZ: 90 },
  click: { scale: 1, borderRadius: "100px" },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} whileHover="hover" whileTap="click"></Box>
    </Wrapper>
  );
}
```

- drag

```
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin // 드래그 후 원래 자리로 돌아감
          dragElastic={0.5} // 당기는 힘
          dragConstraints={biggerBoxRef} // 리미트를 biggerBoxRef크기
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </BiggerBox>
    </Wrapper>
  );
}
```

- useMotionValue & useTransfrom

```
function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);
  return (
    <Wrapper>
      <Box style={{ x, scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}
```

- useViewportScroll

```
  const { scrollY,scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
```

- svg & transition

```
const Svg = styled.svg`
  height: 300px;
  width: 300px;
  path {
    stroke: white;
    stroke-width: 5;
  }
`;
const svg = {
  start: { fill: "rgba(225,225,225,0)", pathLength: 0 },
  end: {
    fill: "rgba(255,255,255,1)",
    pathLength: 1,
  },
};
function App() {
  return (
    <Wrapper>
      <Svg
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <motion.path
          variants={svg}
          initial="start"
          animate="end"
          transition={{
            default: { duration: 5 },
            fill: { duration: 2, delay: 2 },
          }}
          d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
        ></motion.path>
      </Svg>
    </Wrapper>
  );
}
```

- AnimatePresence component

```
const boxVariants = {
  initial: { opacity: 0, scale: 0 },
  leaving: { opacity: 0, scale: 0, y: 20 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
};

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((cur) => !cur);
  return (
    <Wrapper>
      <button onClick={onClick}>Click</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visible"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}
```

- custom props

```
const boxVariants = {
  entry: (back: boolean) => {
    return { x: back ? -300 : 300, opacity: 0, scale: 0 };
  },
  exit: (back: boolean) => {
    return {
      x: back ? 300 : -300,
      opacity: 0,
      scale: 0,
      transition: { duration: 1 },
    };
  },
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 1 } },
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const next = async () => {
    await setBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const prev = async () => {
    await setBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  return (
    <Wrapper>
      <AnimatePresence custom={back}>
        <Box
          custom={back}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={prev}>prev</button>
      <button onClick={next}>next</button>
    </Wrapper>
  );
}
```
