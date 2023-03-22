import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Payment.css";
import { useStateValue } from "./StateProvide";
import CheckoutProduct from "./CheckoutProduct";

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="payment">
      <div className="payment-container">
        <Link to="/checkout" className="checkoutlink">
          <h1>장바구니로 돌아가기 ({basket?.length}개 상품이 존재합니다.)</h1>
        </Link>
        <div className="payment-section">
          <div className="payment-title">
            <h3>배달 받을 곳</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}의 주소</p>
            <p>강원도</p>
            <p>철원</p>
          </div>
        </div>
      </div>

      <div className="payment-section">
        <div className="payment-title">
          <h3>상품 목록</h3>
        </div>
        <div className="payment-items">
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="payment-section">
        <div className="payment-title">
          <h3>결제</h3>
        </div>
        <div className="payment-details"></div>
      </div>
    </div>
  );
}
