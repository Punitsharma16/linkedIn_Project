import { Home } from "./home/home"
import { Jobs } from "./Jobs/jobs"
import { Message } from "./messaging/messesging"
import { MyNetwork } from "./myNetwrok/myNetwork"
import { Notification } from "./notification/notification"
import { Profile } from "./Profile/profile"
import { SearchBar } from "./Search/searchBar"
import "./navbar.css"
import { TryPrimium } from "./Pages/tryPrimium"
import homeSvg from "../../components/NavBar/home/home.svg"
import networkSvg from "../../components/NavBar/myNetwrok/Svgs/mynetwork.svg"
import msgSvg from ".././NavBar/messaging/message.svg"
import jobSvg from ".././NavBar/Jobs/jobs.svg"
import notificationSvg from ".././NavBar/notification/notification.svg"
import profileSvg from "../NavBar/Profile/profile.svg"
import { NavLink } from "react-router-dom"


export const AppNavbar = ()=>{
    return(
        <>
        <main className="app-navbar">
            <section>
               <SearchBar/>
            </section>

            <section className="navbar-links">
                <section>
                      <div className="link-logo">
                      <img src={homeSvg} alt="logo.." />
                      <NavLink to="/home">Home</NavLink>
                      </div>
                </section>
            {/* <Home/> */}
            <section>
            <div className="link-logo">
            <img src={networkSvg} alt="svg.."/>
            <NavLink to="/mynetwork">My Network</NavLink>
            </div>
            </section>
               {/* <MyNetwork/> */}

               <section>
               <div className="link-logo">
            <img src={jobSvg} alt="logo.." />
            <NavLink to="/Jobs">Jobs</NavLink>
             </div>
               </section>
               {/* <Jobs/> */}
               <section>
               <div className="link-logo">
            <img src={msgSvg} alt="logo.." />
             <NavLink to="/message">Messaging</NavLink>
        </div>
               </section>
                {/* <Message/> */}

                <section>
                <div className="link-logo">
            <img src={notificationSvg} alt="logo.." />
            <NavLink to="/notification">Notification</NavLink>
        </div>
                </section>
               {/* <Notification/> */}

               <section style={{paddingRight:'1rem', borderRight:'1px solid #3d3d3d'}}>
               <div className="link-logo">
            {/* <img src={profileSvg} alt="logo.." /> */}
            <Profile/>
        </div>
               </section>
                {/* <Profile/> */}
                <section>
                     <div>Get hired faster</div>
                     <div><TryPrimium/></div>
                </section>
            </section>
            
        </main>
        
        </>
    )
}