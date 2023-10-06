import { Link } from "react-router-dom"
import { ProfileImage } from "../Assets/profileImage"

export const HomeProfile = ()=>{
    const userData = sessionStorage.getItem('userInfo');
    const dataObject = JSON.parse(userData);
    const {name,email} = dataObject;
    return(
        <main className="home-Profile">
            <section className="image">
            <ProfileImage/>
            <h3>{name}</h3>
            <span>{email}</span>
            </section>
            {/* <ProfileImage/> */}
            {/* <h3>Aarav Sharma</h3> */}
            <hr />
            <section style={{display:'flex',justifyContent:'space-between'}}>
            <p>connections</p>
            <p>0</p>
            </section>
            <span>Grow your network</span>
            <hr />
            <p>Access exclusive tools & insights</p>
            <a href="/premium">Get hired faster. Try Premium free.</a>
            <hr />
            <p>My Items</p>
        </main>
        
    )
}