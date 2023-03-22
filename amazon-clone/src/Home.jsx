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

        <div className="home_raw">
          <Product
            id="1"
            title="제품1"
            price={3000}
            image="/images/black_background.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="제품2"
            price={5000}
            image="/images/black_background.jpg"
            rating={4}
          />
        </div>
        <div className="home_raw">
          <Product
            id="3"
            title="제품3"
            price={4000}
            image="/images/black_background.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="제품4"
            price={13000}
            image="/images/black_background.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="제품5"
            price={9000}
            image="/images/black_background.jpg"
            rating={5}
          />
        </div>
        <div className="home_raw">
          <Product
            id="6"
            title="제품6"
            price={1500}
            image="/images/black_background.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}
