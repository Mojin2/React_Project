import React from "react";
import { Link } from "react-router-dom";
import "../css/MyInfo.css";

export default function MyInfo() {
  const url = "https://www.naver.com";
  return (
    <div className="body1">
      <section className="container">
        <h1 className="title">
          <span>Hi, nice</span>
          <span>to see</span>
          <span>you here</span>
        </h1>

        <h2 className="title">
          <span>This is</span>
          <span>my info</span>
          <span>Application</span>
        </h2>

        <div className="fade-in-box">
          {/* 상단 학생증 관련 인포 */}
          <div className="info_up">
            <div className="school_image">
              <img className="school_img" src="/images/info.png"></img>
            </div>
            <div className="school_info">
              <p>숭실대학교</p>
              <p>스마트시스템소프트웨어</p>
              <p>2016.03~2022.08</p>
            </div>
          </div>
          {/* 하단 SNS관련 인포 */}
          <div className="info_down">
            <div className="sns_title">Welcome to my SNS</div>
            <div className="sns_button">
              <button
                type="button"
                onClick={() => {
                  window.open("https://github.com");
                }}
              >
                GitHub
              </button>
            </div>
            <div className="sns_button">
              <button type="button">Instargram</button>
            </div>
            <div className="sns_button">
              <button type="button">Facebook</button>
            </div>
          </div>
          {/* 최하단 네비게이션 버튼 */}
          <div className="app1_navi">
            <button type="button">
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                뒤로가기
              </Link>
            </button>
            <button type="button">홈</button>
            <button type="button">메뉴</button>
          </div>
        </div>
      </section>
    </div>
  );
}
