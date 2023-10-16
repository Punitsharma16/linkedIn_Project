import { Link, useNavigate } from "react-router-dom"
import "./signup.css"
import { useState } from "react"
import { getHeaderWithProjectIDAndBody } from "../utils/config"
import axios from "axios"
export const Signup = ()=>{
    const navigate = useNavigate();
    const [userInfo,setUserInfo] = useState({
        name:'',
        email:'',
        password:'',
    })
    const handleInfo =(e)=>{
        const{name,value} = e.target;
        setUserInfo({...userInfo,[name]:value})
    };

    const signup = async (userInfo)=>{
        // userInfo.appType='linkedIn';
        const headerConfig = getHeaderWithProjectIDAndBody();
        try {
            const responce = await axios.post(
                'https://academics.newtonschool.co/api/v1/user/signup',
                userInfo,
                headerConfig,
            );
            console.log(responce);
            // console.log(responce.data.data.profileImage);
            if(responce.data.token){
                sessionStorage.setItem("authToken",responce.data.token);
                // console.log(responce.data.token);
                sessionStorage.setItem("userInfo",JSON.stringify(responce.data.data.user));
                navigate('/');
            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    
    const submitForm = (e)=>{
        e.preventDefault();
        signup({...userInfo,appType:'linkedin'});
    };

    console.log(userInfo);

    return(
        <>
        <section className="signup-container">
            <div className="signup-logo">
                <p>Linked </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin-logo" height="35px"/>
            </div>
        <p>Make the most of your professional life</p>
        <main className="signup-form">
            <form className="form" onSubmit={submitForm}>
            <label htmlFor="username">Username</label>
            <input type="text" name="name" value={userInfo.name} id="username" onChange={handleInfo} placeholder="Enter your name.." required/>
            <br/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={userInfo.email} onChange={handleInfo} placeholder="Enter email address.." required/>
            <br/>
            <label htmlFor="password">Password </label>
            <input type="password" name="password" id="password" value={userInfo.password} onChange={handleInfo} placeholder="Enter your password.."required/>
            <br/>
            <div className="agree-links">By clicking Agree & Join, you agree to the LinkedIn <a href="https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement">User Agreement</a>, <a href="https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy">Privacy Policy</a>, and <a href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy">Cookie Policy</a>.</div>
            <br/>
            <button className="join-btn">Agree & Join</button>
            </form>
            <br/>
            <div>Already on LinkedIn? <Link to="/">Sign in</Link></div>
        </main>
        <div className="get-help-div">Looking to create a page for a business? <a href="https://www.linkedin.com/help/linkedin/answer/a543852?trk=registration-frontend_join-form-page-help-link">Get help</a></div>
    </section>
    <footer className="footer">
        <div className="footer-logo">
            <p>Linked</p>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png" alt="logo.." height="20px"/>
            <p><span>&copy;</span>2023</p>
        </div>
        <a href="https://www.linkedin.com/accessibility?trk=registration_footer-accessibility">Accessibility</a>
        <a href="https://www.linkedin.com/legal/privacy-policy?trk=registration_footer-privacy-policy">Privacy Policy</a>
        <a href="https://www.linkedin.com/legal/copyright-policy?trk=registration_footer-copyright-policy">Copyright Policy</a>
        <a href="https://www.linkedin.com/psettings/guest-controls?trk=registration_footer-guest-controls">Guest Controls</a>
        <a href="https://about.linkedin.com/?trk=registration_footer-about">About</a>
        <a href="https://www.linkedin.com/legal/user-agreement?trk=registration_footer-user-agreement">User Agreement</a>
        <a href="https://www.linkedin.com/legal/cookie-policy?trk=registration_footer-cookie-policy">Cookie Policy</a>
        <a href="https://www.linkedin.com/legal/professional-community-policies?trk=registration_footer-community-guide">Community Guidelines</a>
    </footer>
        </>
    )
}