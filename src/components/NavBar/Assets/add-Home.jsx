import { ProfileImage } from "./profileImage"
import './addHome.css'
// import { useState } from "react"
export const AddHome = ()=>{
    // const [isClicked,setIsClicked] = useState(false);
    // const handleButton = ()=>{
    //     setIsClicked(!isClicked);
    // }
    const userData = sessionStorage.getItem('userInfo');
    const dataObject = JSON.parse(userData);
    const {name} = dataObject;
    return(
        <main className="add-Box">
            <p className="add-box-text">{name}, make connections that matter most in your job search</p>
            <div className="add-image">
            <ProfileImage/>
            <img className="imgOfAdd" src="https://c8.alamy.com/comp/JBA5R9/a-logo-sign-outside-of-a-facility-occupied-by-saudi-aramco-in-houston-JBA5R9.jpg" alt="aramco.."/>
            </div>
            <p>See who's viewed your profile in the last 90 days</p>
            <a href="/premium" className="add-follow-btn">Try for free!</a>
        </main>
    )
}