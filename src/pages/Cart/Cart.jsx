import { Link, useNavigate } from 'react-router-dom'
import './Cart.css'
import CartProduct from '../../component/CartProduct/CartProduct'
import ImageProduct from  '../../assets/-original-imahfjsfgu7vjkvw.webp'

export default function Cart(){
  const navigate = useNavigate();
  
    const ContinueShoping=()=>{
      navigate('/products')
    }
    return( 
        <div>
            <div className="container">
      <div className="row ">
        <h2 className="Cart-title text-center ">Your Cart</h2>
        <div className="cart-wrapper d-flex flex-row" id="cart-wrapper">
          <div className="order-detail d-flex flex-column" id="orderDetail">
            {/* <!-- todo   --> */}
            <div className="order-detail-tittle fw-bold">order Detail</div>
          <CartProduct productImage={ImageProduct} data={"Google Pixel 9A (Obsidian, 256 GB)(8 GB RAM ) no.1 backup good to use "} price=" $39,999"/> <hr />
          <CartProduct productImage={ImageProduct} data={"Google Pixel 9A (Obsidian, 256 GB)(8 GB RAM ) no.1 backup good to use "} price=" $39,999"/> <hr />
          <CartProduct productImage={ImageProduct} data={"Google Pixel 9A (Obsidian, 256 GB)(8 GB RAM ) no.1 backup good to use "} price=" $39,999"/> 
          </div>
          <div className="price-detail d-flex flex-column" id="price-detail">
            <div className="price-detail-box">
              {/* <!-- todo   --> */}
              <div className="price-detail-tittle fw-bold">Price detail</div>
              <div className="price-detail-data">
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                  <div>price</div>
                  <div id="total-price"></div>
                </div>
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                  <div>Discount</div>
                  <div>&#8377; 10</div>
                </div>
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                  <div>Delivery charges</div>
                  <div>free</div>
                </div>
                <hr/>
                <div
                  className="price-detail-data-item d-flex flex-row justify-content-between"
                >
                
                  <div>Total</div>
                  <div id="net-price"></div>
                </div>
              </div>
            </div>
            <div className="continue-shoping-btn">
              <a
                className="continue-shopping btn btn-info text-decoration-none" onClick={ContinueShoping}>
                  Continue shopping
              </a>
              <Link
                to="/Checkout"
                className="Checkout-btn btn btn-primary text-decoration-none">
                 CheckOut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}