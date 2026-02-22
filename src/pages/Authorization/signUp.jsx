import Auth from "../../component/Auth/Auth";
import './Auth.css'
import { Link } from "react-router-dom";


export default function SignIn(){
    return (
        <div>
            <div className="container">
             <div className="row">
                <h2 className="home-tittle text-center">
                WELCOME TO CART
                </h2>
            </div>
            <div className="container-info">
            <div className="Loginwrapper" id="LoginForm">
            <h2 className='Login text-center'>Signup</h2>
                <Auth/>     
            <div className="signup-btn text-center text-info" id="showSignupBtn" >Already have an Account? Sign in Here</div>
            <div className="signup text-center">
                <Link to='/signin'> sign In ?</Link>
            </div>
        </div>
        </div>
        </div>  
    </div>
    )
}