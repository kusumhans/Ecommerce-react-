// css import
import './ProductList.css'

// image import
import productImage from '../assets/-original-imahfjsfgu7vjkvw.webp'
import ProductBox from '../component/productBox/productBox';
import FilterProducts from '../component/FilterProducts/FilterProducts';

function ProductList(){
    return(
        <>
            <div classNameName="container">
                <div classNameName="row">
                <h2 class="product-list-tittle text-center ">All Product</h2>
                    <div className="product-list-wrapper d-flex flex-row">
                        <FilterProducts />
                    <div className="product-list-box" id="productlist">
                    {/* <!-- list of product --> */}
                        <ProductBox productImage={productImage} name={"Samsong 17"} price='1000' />
                    </div> 
                </div>
             </div>
            </div>
        </>
    )
}
export default ProductList;