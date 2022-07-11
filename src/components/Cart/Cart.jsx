import React from "react";
import Product from "../Product/Product";

const Cart = () => {
  const handleButton = (Product) => {
    console.log("done");
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={Product.image}
              alt={Product.title}
              height="200px"
              width="100px"
            />
          </div>
          <div className="col-md-4">
            <h3>{Product.title}</h3>
            <p className="load fw-bold">
              {Product.qty} x $ {Product.price} = ${Product.qty * Product.price}
            </p>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => handleButton(Product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => handleButton(Product)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
