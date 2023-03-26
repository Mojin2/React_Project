import React from "react";
import "../css/Homepage.css";
export default function Homepage() {
  return (
    <div className="main">
      <div class="card">
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
          <div className="inside_shape">메인화면</div>
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

        <div className="back"></div>
      </div>
    </div>
  );
}
