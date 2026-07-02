// import css
import './ProductDetail.css'
// import productImage from '../../assets/-original-imahfjsfgu7vjkvw.webp'
import { Link, useParams } from 'react-router-dom'
import {useEffect, useState} from 'react'
import { getProduct } from '../../apis/fakeStoreProductApis';
import axios from 'axios';


export default function ProductDetail(){
    const[product, setProduct] =  useState(null);
    const[added, setAdded] = useState(false)

    const {id} = useParams();

    async function downloadedUrl(id){
        try {
            const response = await axios.get(getProduct(id));
            console.log("API URL:", getProduct(id));
            console.log("FINAL URL:", getProduct(id));
            console.log("DATA:", response.data);

        if (typeof response.data === "string") {
            console.error("❌ API returned HTML, not JSON");
            return;
        }

        setProduct(response.data);
            
        } catch (error) {
            console.log("ERROR:", error);
        }
    }
    useEffect(()=>{
        downloadedUrl(id);
    }, [id]);
         

     const  addedTOCart = ()=>{
            setAdded(true)  
        }
        if (!product) return <h2 className='text-center'>Loading...</h2>;
    return(
        <div>
            <div className="container ">
              <div className="row ">
              <div className="product-detail-wrapper d-flex flex-column flex-lg-row justify-content-evenly align-item-center">
                    <div className="product-img " >
                        <img 
                            src={product.image} 
                            alt="image " 
                            id="product-img"/>  
                    </div>
                   <div className="product-detail-box  d-flex flex-column">
                    <div id="product-detail">
                        <div className="product-name" id="product-name">{product.title}</div>
                        <div className="product-price" id="product-price">&#8377;{product.price} </div>
                         <div className="product-description" id="product-description">
                            <div className="product-description-title ">description</div>
                            <div className="product-description ">{product.description}</div>
                            <div>
                               ⭐ {product?.rating?.rate}
                               ❤️ {product?.rating?.count}
                            </div>
                        </div>
                    </div>

                    <div className="product-detail d-flex flex-column flex-md-row gap-3">
                          <div className={`product-detail-action btn text-decoration-none ${added ? "btn-success":"btn-danger"}`}  onClick={addedTOCart}>
                        <i className="ri-shopping-cart-fill"></i>
                       {added ? "added":"Add To Cart"}
                     </div> 
                     <Link to="/Cart" className="product-detail-action btn btn-warning text-decoration-none">
                        <i className="ri-flashlight-line"></i>
                        BUY NOW
                     </Link>
                   </div>
                    </div>
                </div>
            </div>
          </div>
        </div>)
    
    
}