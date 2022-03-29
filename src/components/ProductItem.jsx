import React from "react";
import "@styles/ProductItem.scss";

import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$20,000</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src={addToCart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
