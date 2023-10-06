import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Signup } from './components/Singup/signup';
import { AppNavbar } from './components/NavBar/navbar';
import { Home } from './components/NavBar/home/home';
import {token} from "./components/NavBar/Assets/AuthToken"
import { MyNetwork } from './components/NavBar/myNetwrok/myNetwork';
import { Message } from './components/NavBar/messaging/messesging';
import { Jobs } from './components/NavBar/Jobs/jobs';
import { Notification } from './components/NavBar/notification/notification';
import { Profile } from './components/NavBar/Profile/profile';
import { AuthNavigater } from './components/utils/AuthNavigater';
import { LinkedinNews } from './components/NavBar/home/News';
import { Premium } from './components/NavBar/Pages/premiumPage';
import { SentModal } from './components/NavBar/home/sentButtonModel';
import { createContext, useEffect, useState } from 'react';
import { Event } from './components/NavBar/myNetwrok/Event/Event';
import {FilterByName } from './components/NavBar/myNetwrok/Connections/connectins';
import { NewsLetterBox } from './components/NavBar/myNetwrok/NewsLetter/newsletter';

export const showModalContext = createContext();
export const sowPremiumModalContext = createContext();
function App(){
  const [premiumModal,setPremiumModal] = useState(false);
  const [showModal,setShowModal] = useState(false);
  useEffect(() => {
    // disable the scrollbar
    if(showModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'unset'
    }
  }, [showModal])
  return(
    <main className='main-page'>
      <AppNavbar/>
      
      <Routes>
        {/* <Route path='/' element={<AppNavbar/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/home' element={
          <showModalContext.Provider value={{setShowModal}}>
          { showModal && <div className='modal-wrapper'><SentModal/></div>}
          <Home/>
        </showModalContext.Provider>
        }/>
        <Route path='/mynetwork' element={<MyNetwork/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/premium' element={<Premium/>}/>
        <Route path='/mynetwork/events' element={<Event/>}/>
        <Route path='/mynetwork/connections' element={<FilterByName/>}/>
        <Route path='/mynetwork/newsletter' element={<NewsLetterBox/>}/>
      </Routes>
    </main>
  )
}
export default App;
