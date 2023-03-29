import React from "react";
import "../css/TestApp.css";
import { Link } from "react-router-dom";

export default function TestApp() {
  return (
    <div className="main">
      <div className="outside_shape">
        <div className="notch_bar">
          <div className="camera_container">
            <div className="camera"></div>
          </div>
          <div className="speaker_container">
            <div className="speaker"></div>
          </div>
          <div className="sensor"></div>
        </div>
        <div className="inside_shape1"></div>
        {/* 내부 앱들 아이콘 넣는 부분 */}
        <div className="status_bar"></div>

        <div className="app_container">
          <p>Test App 1</p>
        </div>

        <div className="bottom">
          <div className="button_container">
            <div className="button">
              <div className="button_inside_container">
                <div className="button_inside"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="back"></div> */}
    </div>
  );
}
