import { Route, Routes } from "react-router-dom";
// import components
import Home from "../pages/home/home";
import Error from "../pages/error/error";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetail/ProductDetal";

export default function MainRouters(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Products" element={<ProductList />}/>
            <Route path="/products/2" element={<ProductDetail/>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}