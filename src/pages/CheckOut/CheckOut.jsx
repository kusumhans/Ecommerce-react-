import { useState } from 'react'
import './CheckOut.css'

export default function CheckOut(){
    const [userFiled, SetUserField]= useState("")

    const Continue = ()=>{
        if(userFiled === ""){
            alert("first fill the email or mobile number");
            return
        }
       alert("your order is successfully submited")
       SetUserField("")
    }
    return(
        <div>
            <div className="continer-box">
            <div className="row-box">
                <div className="loginbar d-flex">
                <div className="div">1</div>
                        LOGIN OR SIGNUP
                    </div>
                <div className="loginorsignup d-flex flex-row">
                
                    <hr />
                    <div className="rightside">
                    <div className="name d-flex flex-column">
                    <input 
                        type="name" 
                        placeholder=" Enter email / Enter name" 
                        value={userFiled} 
                        onChange={(e) =>SetUserField(e.target.value)} 
                        required
                        />
                    </div>
                    <p className="termspolicy">
                    By continuing, you agree to shop cart's
                    <a href="#">Terms of Use</a>
                    and
                    <a href="#">Privacy Policy </a>
                    </p>
                    <button onClick={Continue}>CONTINUE</button>
                    </div>
                    <div className="leftside">
                    <h6 className="Advantages">Advantages of our secure login</h6>
                    <h6 className="orders " > <i className="ri-truck-line truck"></i>Easily track orders, Hassele free Returns</h6>
                    <h6  className="alerts"><i className="ri-notification-line bell"></i>Get Revelent Alerts and Recommendation</h6>
                    <h6 className="Reviews"> <i className="ri-star-line star"></i>Wishlist, Reviews, Ratings and more.</h6>
                    </div>
                </div>
                <div className="Delivery">DELIVERY ADDRESS</div>
                <div className="ordersummary">ORDER SUMMARY</div>
                <div className="paymentoption">PAYMENT OPTION</div>
                <hr/>
                <div className="footer d-flex ">
                    <div className="rightfooter  d-flex">
                    Policies:Returnds Policy | Terms of Use | Security | Privacy <div className="link">© 2007-2005 Shop-cart.com</div>
                    </div>
                    <div className="leftfooter">
                    Need help?Visith the <a href="#">Help Center </a>or <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}