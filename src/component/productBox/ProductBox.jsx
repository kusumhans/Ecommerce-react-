import { Link } from "react-router-dom";
import "./ProductBox.css";

function ProductBox({ productImage, name, price, productId }) {
  const discount = Math.floor(Math.random() * 40) + 10;

  return (
    <Link
      to={`/product/${productId}`}
      className="product-item text-decoration-none"
    >
      <div className="discount-badge">
        {discount}% OFF
      </div>

      <div className="product-image">
        <img src={productImage} alt={name} />
      </div>

      <div className="product-content">

        <h5 className="product-name">
          {name}    
        </h5>

        <div className="product-rating">
          ⭐ 4.5
        </div>

        <div className="product-price">
          ₹{price}
        </div>

        <button className="cart-btn">
          <i className="ri-shopping-cart-2-line"></i>
          Add to Cart
        </button>

      </div>
    </Link>
  );
}

export default ProductBox;