// css import
import './ProductList.css'

// image import
// import productImage from '../../assets/-original-imahfjsfgu7vjkvw.webp'
import ProductBox from '../../component/productBox/ProductBox';
import FilterProducts from '../../component/FilterProducts/FilterProducts';
import { getALLProducts } from '../../apis/fakeStoreProductApis';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function ProductList(){
    const[products, setProducts] = useState(null)
    const [query] = useSearchParams();

    async function downloadeProducts(category) {
        const downloadedUrl = category ? `${getALLProducts()}/category/${category}`  : getALLProducts();
        const response = await axios.get(downloadedUrl);
        setProducts(response.data);
    }

    useEffect(() =>{
        downloadeProducts(query.get('category'));
    },[])

    return(
        <>
            <div classNameName="container">
                <div classNameName="row">
                <h2 class="product-list-tittle text-center ">All Product</h2>
                    <div className="product-list-wrapper d-flex flex-row justify-content-start">
                        <FilterProducts />
                    <div className="product-list-box" id="productlist">
                    {/* <!-- list of product --> */}
                        {products && products.map(  
                            (product) =>  <ProductBox 
                                    productImage={product.image} 
                                    name={product.title} 
                                    price= {product.price}
                                    key={product.id}  />)}
                    </div> 
                </div>
             </div>
            </div>
        </> 
    )
}
export default ProductList;