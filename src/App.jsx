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
function App(){
  return(
    <main>
      <Routes>
        {/* <Route path='/' element={<AppNavbar/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/home' element={<AuthNavigater><Home/></AuthNavigater>}/>
        <Route path='/mynetwork' element={<MyNetwork/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <AppNavbar/>
    </main>
  )
}
export default App;
