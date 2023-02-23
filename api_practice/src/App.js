import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routing/Home";
import Tv from "./routing/Tv";
import Celebrity from "./routing/Celebrity";
import Movies from "./routing/Movies";
import NotFound from "./routing/NotFound";
import Header from "./routing/Header";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
