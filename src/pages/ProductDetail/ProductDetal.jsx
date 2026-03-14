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

    const {id} = useParams()

    async function downloadedUrl(id){
        const response = await axios.get(getProduct(id));
        setProduct(response.data);
        console.log(response.data);
    }
    useEffect(()=>{
        downloadedUrl(id);
    },[])
         

     const  addedTOCart = ()=>{
            setAdded(true)
        }

    return(
        product && (
        <div>
            <div className="container ">
              <div className="row ">
                <div className="product-detail-wrapper d-flex flex-row justify-content-evenly  align-item-center">
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
                            <div className="product-description-data" id="product-description-data"><span style={{color:'GrayText', fontWeight:'500'}}>Raiting and Reviews </span> <br /><span style={{color:'GrayText', fontWeight:'400', fontSize:'1.2rem', borderRadius: '2rem', border:'2px solid ', paddingRight:'0.5rem'}}>💚{product.rating.rate}</span>&nbsp;   <span style={{color:'GrayText', fontWeight:'400', fontSize:'1.2rem', borderRadius: '2rem', border:'2px solid ', paddingRight:'0.5rem'}}>❤️{product.rating.count}</span> </div>
                        </div>
                    </div>

                   <div className="product-detail d-flex">
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
    )
}