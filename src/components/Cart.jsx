import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cart = () => {
  const productsData = useSelector((state) => state.cart.productsData);
  const total = useSelector((state) => state.cart.total);

  return (
    <div className="container pb-5 mb-2">
      {productsData.map((item, index) => (
        <Card item={item} key={item.id} index={index} />
      ))}

      <div className="row  ">
        <div className="d-flex justify-content-between">
          <p className="text-muted">Sub Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
      </div>
      <div className="row  ">
        <div className="d-flex justify-content-between">
          <p className="text-muted">Shipping:</p>
          <p>Free</p>
        </div>
      </div>

      <hr className="my-2" />
      <div className="row pt-3 pb-5 mb-2">
        <div className="d-flex justify-content-between">
          <h1>Total:</h1>
          <h1>${total.toFixed(2)}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
