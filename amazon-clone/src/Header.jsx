import React from "react";
import "./Header.css";
import "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvide";
import { auth } from "./firebase";

export default function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      {/* 로고 이미지 */}
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* 검색창 */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 네비게이션바 */}
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요</span>
          <Link to={!user && "/login"} className="homelogin">
            <span
              onClick={handleAuthentication}
              className="header_optionLineTwo"
            >
              {user ? "로그아웃" : "로그인"}
            </span>
          </Link>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">구독과좋아요</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwoheader_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
