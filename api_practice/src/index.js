import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Api from "./api/api";
import Test from "./api/test";
import Weather from "./api/weather";
import Movie from "./api/movielist";
import MovieList from "./api/movielist";
// import "./css/movie.css";
import Login from "./hooks/login";
// import "./css/login.css";
import "./css/routing.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
