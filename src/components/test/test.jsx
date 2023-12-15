import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from "../../redux/actions/testActions";

const Test = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("store", state);
  return (
    <div className="cart">
      <h2>Number of items in Cart:</h2>
      <button
        className="green"
        onClick={() => {
          console.log("chech the add item");
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button
        className="red"
        disabled={state.numOfItems > 0 ? false : true}
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Test;
