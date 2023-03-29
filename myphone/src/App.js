import logo from "./logo.svg";
import "./App.css";
import Homepage from "./components/Homepage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TestApp from "./components/TestApp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/testapp" element={<TestApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
