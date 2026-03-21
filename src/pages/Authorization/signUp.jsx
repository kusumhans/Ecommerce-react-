import Auth from "../../component/Auth/Auth";
import './Auth.css'
import { Link, useNavigate } from "react-router-dom";
import { signup } from '../../apis/fakeStoreProductApis';
import axios from 'axios';
import { useState } from "react";


export default function SignIn(){
    const [resetSignUpForm, setResetSignUpForm] = useState(false);

    const navigate = useNavigate()

    async function onFormSubmitBtn(authArguments) {
        try{
            await axios.post(signup(), {
                username: authArguments.username,
                email: authArguments.email,
                password: authArguments.password,
            })
            navigate('/signin');
        }catch{
            console.log('error')
            setResetSignUpForm(true);
        }
           
        }
    

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
            <Auth onSubmit={onFormSubmitBtn}
                resetForm = {resetSignUpForm}
                />      
            <div className="signup-btn text-center text-info" id="showSignupBtn" >Already have an Account? Sign in Here</div>
            <div className="signup text-center">
                <Link to='/signin'>sign In ?</Link>
            </div>
        </div>
        </div>
        </div>  
    </div>
    )
}