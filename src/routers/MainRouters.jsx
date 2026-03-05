import { Route, Routes } from "react-router-dom";
// import components
import Home from "../pages/Home/Home";
import Error from "../pages/error/Error";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetail/ProductDetal";
import LogIn from "../pages/Authorization/LogIn";
import SignUp from "../pages/Authorization/signUp";
import ForgetPassword from "../pages/Forgetpassword/ForgetPassword";
import Cart from "../pages/Cart/Cart";
import CheckOut from "../pages/CheckOut/CheckOut";

export default function MainRouters(){
    return (    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Products" element={<ProductList />}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
            <Route path="/signin" element={<LogIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/forget" element={<ForgetPassword/>}/>
            <Route path="/Cart" element={<Cart/>}/>
            <Route path="/CheckOut" element={<CheckOut/>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}