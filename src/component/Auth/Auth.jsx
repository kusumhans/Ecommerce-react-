import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Auth({ onSubmit, resetForm }){
    const[form, setForm] = useState({username: '',email: '', password: '', isLoading:false})

    function updateUsername(updateUsername){
        setForm({...form, username:updateUsername})
    }
    function updateEmail(updateEmail){
        setForm({...form, email:updateEmail})
    }
    function updatePassword(updatePassword){
        setForm({...form, password:updatePassword})
    }

    function onFormSubmit() {
        setForm({...form, isLoading:true})
        onSubmit(form);
    }
    useEffect(()=>{
        setForm({username: '', email:'', password:'', isLoading:false})
    }, [resetForm])

    return (
        <div>
            
            <div className="input-group">
                 <input type="text" onChange={(e)=>updateUsername(e.target.value)} value={form.username} className="form-control" placeholder="Username"  />
            </div>
            <div className="input-group">
                 <input type="email" onChange={(e)=>updateEmail(e.target.value)} value={form.email} className="form-control" placeholder="Email"  />
            </div>
            <div className="input-group">       
                 <input type="password" onChange={(e)=>updatePassword(e.target.value)} value={form.password} className="form-control" placeholder="password"  />
            </div>
            
            <div className="input-group login-btn" >
                <button onClick={onFormSubmit} className="btn btn-primary" type="button" disabled={form.isLoading}>
                {(form.isLoading) && <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>}
                {(form.isLoading) ? 'Loading...' : 'submit'}
                </button>
            </div>

            <div className="forgot text-center">
                <Link to='/forget'>Forget password</Link>
            </div>
           
        </div>
    )
}