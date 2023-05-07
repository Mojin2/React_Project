import Button from "./Button";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );

  //////////////////////coin tracker//////////////////////////
  // const [loading, setLoading] = useState(true);
  // const [coins, setCoins] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.coinpaprika.com/v1/tickers")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCoins(json);
  //       setLoading(false);
  //     });
  // }, []);
  // return (
  //   <div>
  //     <h1>The Coins {coins.length !== 0 ? `(${coins.length})` : null}</h1>
  //     {loading ? <strong>Loading...</strong> : null}
  //     <ul>
  //       {coins.map((coin) => (
  //         <li key={coin.id}>
  //           {coin.name}({coin.symbol}) : ${coin.quotes.USD.price}
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  //////////////////ToDO List//////////////////////
  // const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);
  // function onChange(event) {
  //   setToDo(event.target.value);
  // }
  // function onSubmit(event) {
  //   event.preventDefault();
  //   if (toDo === "") {
  //     return;
  //   }
  //   setToDos((cur) => [...cur, toDo]);
  //   setToDo("");
  // }
  // return (
  //   <div>
  //     <h1>My To Dos ({toDos.length})</h1>
  //     <form onSubmit={onSubmit}>
  //       <input
  //         value={toDo}
  //         type={"text"}
  //         placeholder={"Write your todo..."}
  //         onChange={onChange}
  //       ></input>
  //       <button>Add To Do</button>
  //     </form>
  //     <hr />
  //     <ul>
  //       {toDos.map((item, idx) => (
  //         <li key={idx}>{item}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  //////////////////////////////////////////////////////
  // const [counter, setCounter] = useState(0);
  // const [keyword, setKeyword] = useState("");
  // const [showing, setShowing] = useState(false);
  // const onShow = (event) => {
  //   setShowing((cur) => !cur);
  // };
  // const onChange = (event) => {
  //   setKeyword(event.target.value);
  // };
  // const onClick = () => {
  //   setCounter((cur) => cur + 1);
  // };
  // useEffect(() => {
  //   console.log("call once");
  // }, []);
  // //useEffect : 2번째 인자가 빈배열이라면 state가 변경되어도 초기에 한번만 실행되는 함수
  // useEffect(() => {
  //   if (keyword !== "" && keyword.length > 4)
  //     console.log("SEARCH FOR ", keyword);
  // }, [keyword]);
  // // 2번째 인자에 들어간 배열이 변화할때만 실행됨
  // function Hello() {
  //   useEffect(() => {
  //     console.log("created");
  //     return () => {
  //       console.log("destroyed");
  //     }; // Clean Up function : Component가 사라질때 작동
  //   }, []);
  //   return <h2>Hello</h2>;
  // }
  // return (
  //   <div>
  //     <input
  //       value={keyword}
  //       onChange={onChange}
  //       type={"text"}
  //       placeholder={"Search here..."}
  //     />
  //     <h1 className={styles.title}>{counter}</h1>
  //     <button onClick={onClick}>Click</button>
  //     <div>
  //       {showing ? <Hello /> : null}
  //       <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
  //     </div>
  //   </div>
  // );
}

export default App;
