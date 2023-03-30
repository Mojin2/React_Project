import React from "react";
import { Link } from "react-router-dom";
import "../css/Homepage.css";
import Moment from "react-moment";
import { useInterval } from "use-interval";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSignal,
  faBatteryHalf,
} from "@fortawesome/free-solid-svg-icons";
import Battery from "./Battery";

export default function Homepage() {
  const [nowTime, setNowTime] = useState(Date.now());
  useInterval(() => {
    setNowTime(Date.now());
  }, 1000);

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
        <div className="inside_shape"></div>
        {/* 내부 앱들 아이콘 넣는 부분 */}
        <div className="status_bar">
          <span id="clock">
            <Moment format={"HH:mm"} className={"moment-box"}>
              {nowTime}
            </Moment>
          </span>
          <div className="status_bar_right">
            <span className="option">
              <FontAwesomeIcon icon={faSignal} className="signal" />
            </span>
            <span className="option">
              <FontAwesomeIcon icon={faWifi} className="wifi" />
            </span>
            <span className="option">
              {/* <Battery /> */}
              <FontAwesomeIcon icon={faBatteryHalf} className="battery" />
            </span>
          </div>
        </div>

        <div className="app_container">
          <div className="app_container_1">
            <Link to="/testapp">
              <div className="test_app_1">
                <img
                  className="test_app"
                  src="/images/black_background.jpg"
                  alt="miss"
                />

                <p className="test_app_1_text">test_app1</p>
              </div>
            </Link>
          </div>
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
