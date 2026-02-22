// import css
import './ProductDetail.css'
import productImage from '../../assets/-original-imahfjsfgu7vjkvw.webp'

export default function ProductDetail(){
    return(
        <div>
            <div className="container ">
              <div className="row ">
                <div className="product-detail-wrapper d-flex flex-row justify-content-evenly  align-item-center">
                    <div className="product-img " >
                        <img 
                            src={productImage} 
                            alt="image " 
                            id="product-img"/>  
                    </div>
                   <div className="product-detail-box  d-flex flex-column">
                    <div id="product-detail">
                        <div className="product-name" id="product-name">Google Pixel 9A (Obsidian, 256 GB)(8 GB RAM )</div>
                        <div className="product-price" id="product-price">20% <span style={{textDecoration: "line-through", fontWeight:'lighter'}}>& nbsp;49,999</span>&nbsp;$39,999
                        </div>
                         <div className="product-description" id="product-description">
                            <div className="product-description-title ">Google Pixel</div>
                            <div className="product-description-data" id="product-description-data">Google Pixel is a premium smartphone series designed by Google. It runs on a clean version of Android and is known for its: </div>
                        </div>
                    </div>

                   <div className="product-detail d-flex">
                          <div className="product-detail-action  btn btn-danger text-decoration-none ">
                        <i className="ri-shopping-cart-fill"></i>
                        ADD TO CART
                     </div> 
                     <a href="cart.html" className="product-detail-action btn btn-warning text-decoration-none">
                        <i className="ri-flashlight-line"></i>
                        BUY NOW
                     </a>
                   </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}