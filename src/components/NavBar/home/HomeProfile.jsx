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
            <hr style={{borderTop:'#ddd'}}/>
            <Link to="/mynetwork/connections">
            <section style={{display:'flex',justifyContent:'space-between',paddingLeft:'0.3rem',paddingRight:'0.3rem',color:'#3d3d3d'}}>
            <p>connections <br /><span>Grow your network</span></p>
            <p>4</p>
            </section>
            </Link>
            
            <hr style={{borderTop:'#3d3d3d'}}/>
            <p style={{paddingLeft:'0.3rem',paddingRight:'0.3rem'}}>Access exclusive tools & insights <br /><a href="/premium" style={{textDecoration:'underline'}}>Get hired faster. Try Premium free.</a></p>
            <hr style={{borderTop:'#ddd'}}/>
            <p style={{paddingLeft:'0.3rem',paddingBottom:'0.5rem'}}>My Items</p>
        </main>
        
    )
}