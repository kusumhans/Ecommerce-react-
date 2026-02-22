import { Link } from "react-router-dom";

export default function Auth(){
    return (
        <div>
            
            <div className="input-group">
                 <input type="text" className="form-control" placeholder="Username" id="loginUsername"/>
            </div>
            <div className="input-group">
                 <input type="password" className="form-control" placeholder="password" id="loginpassword"/>
            </div>
            <div className="input-group login-btn ">
                 <button className="form-control btn btn-primary text-center">Submit</button>
            </div>
            
            <div className="forgot text-center">
                <Link to='/forget'>Forget password</Link>
            </div>
           
        </div>
    )
}