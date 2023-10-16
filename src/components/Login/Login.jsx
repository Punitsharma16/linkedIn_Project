import { useNavigate } from "react-router-dom"
import { Navbar } from "./Login-Navbar"
import "./login.css"
import { useState } from "react";
import axios from "axios";
import { getHeaderWithProjectIDAndBody } from "../utils/config";
import { debounce } from 'lodash';
export const Login = ()=>{
    // const navigate = useNavigate();


    const [isError,setIsError] = useState(false);
    const [showError, setShowError] = useState('');
    const navigate = useNavigate();
    const debouncedNavigate = debounce(navigate, 500);

    const [userInfo,setUserInfo] = useState({
        email:'',
        password:'',
    });

    const handleInfo = (e)=>{
        const {name,value} = e.target;
        setUserInfo({...userInfo,[name]:value})
    }

    const signIn = async (userInfo)=>{
            const headerConfig = getHeaderWithProjectIDAndBody();
            try {
                const responce = await axios.post(
                    'https://academics.newtonschool.co/api/v1/user/login',
                    userInfo,
                    headerConfig,
                )
                setIsError(false);
                console.log(responce);
                if(responce.data.token){
                    sessionStorage.setItem("authToken",responce.data.token);
                    console.log(responce.data.token);
                    sessionStorage.setItem("userInfo",JSON.stringify(responce.data.data));
                    // navigate('/home');
                    navigate('/home');
                }
            } catch (error) {
                setIsError(true);
                setShowError(error.response.data.message);
            }
    }

    const submitForm = (e)=>{
        e.preventDefault();
        signIn({...userInfo,appType:'linkedin'})
    }

    return(
        <>
        <Navbar/>
        <main className="login-page"> 
            <section>
            <p className="form-heading">Welcome to your professional community</p>
            <form className="login-form" onSubmit={submitForm}>
                <label htmlFor="email">Email : </label>
                <input type="email" name="email" id="email" value={userInfo.email} onChange={handleInfo} placeholder="Enter your email.."/>
                <br/>
                <label htmlFor="password">Password : </label>
                <input type="password" name="password" id="password" value={userInfo.password} onChange={handleInfo} placeholder="Enter your password.."/>
                
                {
                    isError && <p style={{color:'red'}}>{`* ${showError}`}</p>
                }
                <br/>
                <input className="login-btn" type="submit" value='Sign in'/>
                <br/>
                <br/>
                {/* <button className="signup-btn" onClick={()=>navigate('/signup')}>New to LinkedIn? Join now</button> */}
            </form>
            <button className="signup-btn" onClick={()=>debouncedNavigate('/signup')}>New to LinkedIn? Join now</button>

            </section>
            <img src="https://olc.org/wp-content/uploads/2021/07/LinkedIn-Learning-Graphic-for-Libraries.png" alt="load-image.." height="500px" />
        </main>
        </>
    )
}