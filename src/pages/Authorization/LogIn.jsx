// import css
import Auth from '../../component/Auth/Auth'
import './Auth.css';
import { Link } from "react-router-dom";

export default function LogIn(){
    return(
        <div className="container">
             <div className="row">
                <h2 className="home-tittle text-center">
                WELCOME TO CART
                </h2>
            </div>
            <div className="container-info">
            <div className="Loginwrapper" id="LoginForm">
            <h2 className='Login text-center'>Login</h2>
                <Auth/>     
            <div className="signup-btn text-center text-info" id="showSignupBtn" >Don't have an Account? Sign up</div>
            <div className="signup text-center">
                <Link to='/signup'>Logout</Link>
            </div>
        </div>
    </div>
</div>
    )
}