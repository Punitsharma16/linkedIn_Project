import { ProfileImage } from "./profileImage"
import './addHome.css'
import { useState } from "react"
export const AddHome = ()=>{
    const [isClicked,setIsClicked] = useState(false);
    const handleButton = ()=>{
        setIsClicked(!isClicked);
    }
    const userData = sessionStorage.getItem('userInfo');
    const dataObject = JSON.parse(userData);
    const {name} = dataObject;
    return(
        <main className="add-Box">
            <p className="add-box-text">{name}, make connections that matter most in your job search</p>
            <div className="add-image">
            <ProfileImage/>
            <img className="imgOfAdd" src="https://media.licdn.com/dms/image/C560EAQGdMVS0Q25gPw/rightRail-logo-shrink_200_200/0/1663316485517?e=1697122800&v=beta&t=vKlNfJFddhPq2Ed-6z_8lYYhPkI4_5IFuccggZ7CWwY" alt="aramco.."/>
            </div>
            <p>See who's viewed your profile in the last 90 days</p>
            <a href="/premium" className="add-follow-btn">Try for free!</a>
        </main>
    )
}