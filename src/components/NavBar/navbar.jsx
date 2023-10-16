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
import { NavLink, Route, Routes } from "react-router-dom"
import { Premium } from "./Pages/premiumPage"
import { Event } from "./myNetwrok/Event/Event"
import { FilterByName } from "./myNetwrok/Connections/connectins"
import { NewsLetterBox } from "./myNetwrok/NewsLetter/newsletter"
import { ViewProfile } from "./Profile/ViewProfile/ViewProfile"
import { ViewProfileImage } from "./Profile/ViewProfile/ViewprofileImage"
import { SeenProfile } from "./Profile/AnaliticalProfileView/AnaliticalProfileView"
import { Activity } from "./Profile/MyActivities/activities"
import { SentModal } from "./home/sentButtonModel"
import { Login } from "../Login/Login"
import { Signup } from "../Singup/signup"
import { HelpModal } from "./Profile/HelpModal/HelpModal"
import { createContext, useEffect, useState } from "react"
import { MsgModal } from "./messaging/msgModal/msgModal"

export const MsgModalContext = createContext();
export const giveUser = createContext();
export const showModalContext = createContext();
export const helpModalContext = createContext();


export const AppNavbar = ()=>{

  const [showModal,setShowModal] = useState(false);
  const [showMsgModal,setMsgModal] = useState(false);
//   const [showHelpModal, setHelpModal] = useState(false);
  const [filter,setFilter] = useState();

  useEffect(() => {
    if(showModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'unset'
    }
  }, [showModal])


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

           
 <main className='main-page'>
       <Routes>     
             {/* <Route path="/" element={<Login/>}/>
             <Route path='/signup' element={ <Signup/>}/> */}
             <Route path='/home' element={
                <showModalContext.Provider value={{setShowModal}}>
                    { showModal && <div className='modal-wrapper'><SentModal/></div>}
                      <giveUser.Provider value={{filter}}>
                         <Home/>
                      </giveUser.Provider>
                </showModalContext.Provider>
             }/>
             <Route path='/mynetwork' element={<MyNetwork/>}/>
            <Route path='/message' element={
                 <MsgModalContext.Provider value={{setMsgModal}}>
                     {showMsgModal && <div className='modal-wrapper'><MsgModal/></div>}
                     <Message/>
                 </MsgModalContext.Provider>
        
            }/>
            <Route path='/jobs' element={<Jobs/>}/>
            <Route path='/notification' element={<Notification/>}/>
            <Route path='/premium' element={<Premium/>}/>
            <Route path='/mynetwork/events' element={<Event/>}/>
            <Route path='/mynetwork/connections' element={<FilterByName/>}/>
            <Route path='/mynetwork/newsletter' element={<NewsLetterBox/>}/>
            <Route path='/profile' element={<ViewProfile/>}/>
            <Route path='/analytics/profile-views' element={<SeenProfile/>}/>
            <Route path='recent-activity/all' element={<Activity/>}/>
      </Routes>
      </main>
            
        
        
        </>
    )
}