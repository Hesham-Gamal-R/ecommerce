import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const ShowProduct = () => {
    return (
      <React.Fragment key={product.id}>
        <div className="col-md-6" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>

        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="load fw-bolder">
            Rating{product.rating && product.rating.rate}
            <i className="fa fa-star" />
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="load">{product.description}</p>

          <button className="btn btn-outline-dark me-2">Add to Cart</button>

          <NavLink to="/cart" className="btn btn-dark me-2" onClick={() => {}}>
            Go to Cart
          </NavLink>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? "loading..." : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
