import React from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          //react의 경우 public에서 파일들을 관리해서 경로 지정해줘야함
          src="/images/black_background.jpg"
          alt="background"
        />

        <div className="home_row">
          <Product />
        </div>
        <div className="home_row">
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}
