import { Route, Routes } from "react-router-dom";
// import components
import Home from "../pages/home/home";
import Error from "../pages/error/error";
import ProductList from "../pages/ProductList/ProductList";
import ProductDetail from "../pages/ProductDetail/ProductDetal";
import LogIn from "../pages/Authorization/LogIn";
import SignUp from "../pages/Authorization/signUp";
import ForgetPassword from "../pages/Forgetpassword/ForgetPassword";

export default function MainRouters(){
    return (    
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/Products" element={<ProductList />}/>
            <Route path="/products/:id" element={<ProductDetail/>}/>
            <Route path="/signin" element={<LogIn/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/forget" element={<ForgetPassword/>}/>
            <Route path="*" element={<Error />}/>
        </Routes>
    )
}