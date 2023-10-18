
import { useNavigate } from "react-router-dom"
import "./login.css"
export const Navbar = ()=>{
    const navigate = useNavigate();
    return(
        <main className="login-navbar">
            <div className="login-logo">
                <h3>Linked </h3>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin-logo" height="35px"/>
            </div>
            
            <button onClick={()=>navigate('/signup')}>Join Now</button>
        </main>
    )
}