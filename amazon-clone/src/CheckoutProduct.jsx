import React from "react";
import "./CheckoutProduct.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvide";

export default function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <strong>{price}</strong>
          <small>원</small>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
      </div>
    </div>
  );
}
