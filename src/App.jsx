import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Signup } from './components/Singup/signup';
// import { AppNavbar } from './components/NavBar/navbar';
import { Home } from './components/NavBar/home/home';
import {token} from "./components/NavBar/Assets/AuthToken"
import { MyNetwork } from './components/NavBar/myNetwrok/myNetwork';
import { Message } from './components/NavBar/messaging/messesging';
import { Jobs } from './components/NavBar/Jobs/jobs';
import { Notification } from './components/NavBar/notification/notification';
// import { Profile } from './components/NavBar/Profile/profile';
// import { AuthNavigater } from './components/utils/AuthNavigater';
// import { LinkedinNews } from './components/NavBar/home/News';
import { Premium } from './components/NavBar/Pages/premiumPage';
import { SentModal } from './components/NavBar/home/sentButtonModel';
import { createContext, useEffect, useState } from 'react';
import { Event } from './components/NavBar/myNetwrok/Event/Event';
import {FilterByName } from './components/NavBar/myNetwrok/Connections/connectins';
import { NewsLetterBox } from './components/NavBar/myNetwrok/NewsLetter/newsletter';
import { MsgModal } from './components/NavBar/messaging/msgModal/msgModal';
import { HelpModal } from './components/NavBar/Profile/HelpModal/HelpModal';
import { ViewProfile } from './components/NavBar/Profile/ViewProfile/ViewProfile';
import { SeenProfile } from './components/NavBar/Profile/AnaliticalProfileView/AnaliticalProfileView';
import { Activity } from './components/NavBar/Profile/MyActivities/activities';
import { NavBarWithOutlet } from './components/NavBar/home/NavBarOutlet';
import { NetworkPage } from './components/NavBar/myNetwrok/NetworkPage/pages';
import { User1 } from './components/NavBar/myNetwrok/users/user1';
import { User2 } from './components/NavBar/myNetwrok/users/user2';
import { User3 } from './components/NavBar/myNetwrok/users/user3';
import { User4 } from './components/NavBar/myNetwrok/users/User4';
import { MyProvider } from './components/utils/CustomContext';


export const MsgModalContext = createContext();
export const giveUser = createContext();
export const showModalContext = createContext();
export const helpModalContext = createContext();
export const seacrhContext = createContext();
export const sendSearchVal = createContext();
export const searchValToHome = createContext();
// export const helpModalContext = createContext();
// export const sowPremiumModalContext = createContext();
// export const MsgModalContext = createContext();

function App(){

  // const userToken = sessionStorage.getItem('userInfo');
  //   const dataToken = JSON.parse(userToken);
  //   const {token} = dataToken;
  //   console.log(token);
  
  // const navigate = useNavigate();
  const [showHelpModal, setHelpModal] = useState(false);
  const [showModal,setShowModal] = useState(false);
  const [showMsgModal,setMsgModal] = useState(false);
  const [filter,setFilter] = useState();
  const [searchVal,setSearchVal] = useState('');



  // const [filter,setFilter] = useState();
  
  // const [showMsgModal,setMsgModal] = useState(false);
  // const [showModal,setShowModal] = useState(false);
  // const [showHelpModal, setHelpModal] = useState(false);
  useEffect(() => {
    if(showModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'unset'
    }
  }, [showModal])

  const valueFormSearchBar = (data)=>{
    setSearchVal(data);
  }
  console.log(searchVal);

  
  return(
    <main className='main-page'>
      {/* <takeValue.Provider value={{getData:getData}}> */}
     
      {/* <helpModalContext.Provider value={{setHelpModal}}>
         <NavBarWithOutlet/>
              {showHelpModal && <div className='modal-wrapper'><HelpModal/></div>}
            </helpModalContext.Provider> */}

      

      <Routes>
        {/* <Route path='/' element={<AppNavbar/>}/> */}
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path='/signup' element={ <Signup/>}/>

        <Route path='/' element={
          <helpModalContext.Provider value={{setHelpModal}}>
          {token?
          <seacrhContext.Provider value={{valueFormSearchBar}}>
            <NavBarWithOutlet/>
          </seacrhContext.Provider>
          :<Login/>}
               {showHelpModal && <div className='modal-wrapper'><HelpModal/></div>}
             </helpModalContext.Provider>
        }>
        <Route path='/home' element={
          <showModalContext.Provider value={{setShowModal}}>
          { showModal && <div className='modal-wrapper'><SentModal/></div>}
          <giveUser.Provider value={{searchVal}}>
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
        <Route path='/mynetwork/pages' element={<NetworkPage/>}/>
        <Route path='/profile' element={<ViewProfile/>}/>
        <Route path='/analytics/profile-views' element={<SeenProfile/>}/>
        <Route path='recent-activity/all' element={<Activity/>}/>
        <Route path='/mynetwork/1' element={<User1/>}/>
        <Route path='/mynetwork/2' element={<User2/>}/>
        <Route path='/mynetwork/3' element={<User3/>}/>
        <Route path='/mynetwork/4' element={<User4/>}/>
        </Route>
      </Routes>
      {/* </takeValue.Provider> */}
    </main>
    
  )
}
export default App;
