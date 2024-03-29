import React from "react";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../reducers";

const Card = ({ item, index }) => {
  const dispatch = useDispatch();
  const quantityOptions = [];
  for (let i = 0; i <= item.stock; i++) {
    quantityOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    dispatch(updateQuantity({ index, quantity: newQuantity }));
  };

  const handleRemoveButtonClick = () => {
    dispatch(removeItem(index));
  };

  return (
    <div className="cart-item d-md-flex justify-content-between">
      <button onClick={handleRemoveButtonClick}>Remove</button>
      <div className="px-3 my-3">
        <a className="cart-item-product" href="#">
          <div className="cart-item-product-thumb">
            <img src={item.thumbnail} alt="Product" />
          </div>
          <div className="cart-item-product-info">
            <h4 className="cart-item-product-title">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </a>
      </div>
      <div className="px-3 my-3 text-center">
        <div className="cart-item-label">Quantity</div>
        <div className="count-input">
          <select
            className="form-control"
            value={item.selectedQuantity}
            onChange={handleQuantityChange}
          >
            {quantityOptions}
          </select>
        </div>
      </div>
      <div className="px-3 my-3 text-center">
        <div className="fw-bold">${item.price}</div>
      </div>
    </div>
  );
};

export default Card;
