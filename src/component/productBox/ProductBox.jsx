import { Link } from 'react-router-dom'
import './ProductBox.css'


function ProductBox({productImage, name, price, productId}){
    
    return (    
             <Link  
             to={`/products/${productId}`}
             href="product-detail.html" 
             target="_blank" 
             className="product-item text-decoration-none d-inline-block">
                    <div className="product-image">
                        <img src={productImage} alt="" />
                    </div>
                <div className="product-name text-center">{name.substring(0, 12)+ "..."}</div>
                <div className="product-price text-center">&#8377;{price}</div>
             </Link> 
    )
}
export default ProductBox   