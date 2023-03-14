import React from "react";
import "./Header.css";
import "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";

export default function Header() {
  return (
    <div className="header">
      {/* 로고 이미지 */}
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      {/* 검색창 */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* 네비게이션바 */}
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">안녕하세요</span>
          <span className="header_optionLineTwo">로그인</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">돌아가기</span>
          <span className="header_optionLineTwo">주문내역</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">반가워요</span>
          <span className="header_optionLineTwo">구독과좋아요</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasket />
          <span className="header_optionLineTwoheader_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
