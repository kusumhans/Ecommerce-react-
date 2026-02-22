import './ForgetPassword.css';   

export default function ForgetPassword(){
    return(
        <div>
            <div className="container-div">
                <div className="row-div">
                    <h2 className='password-heading text-center'>Forget your Password ? </h2>
                    <p className='text mb-4'>Enter your register email address and we'll send you OTP request to reset your password.</p>  
               
                    <h6 className='email-text mb-3'>Email(Required)</h6>
                    <input type="text" placeholder="Enter Email/Mobile number"className='input mb-5' />
                    <p className='term-policy mb-4 text-center'>By continuing, you agree to shopCart Terms of Use and Privacy Policy.</p>
                    <button className="btn btn-primary ">REQUEST OTP    </button>
                    </div>
            </div>
        </div>
    )
}