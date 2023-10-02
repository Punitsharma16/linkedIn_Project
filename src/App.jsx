import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login/Login';
import { Signup } from './components/Singup/signup';
function App(){
  return(
    <main>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path='/signup' element={ <Signup/>}/>
      </Routes>
    </main>
  )
}
export default App;
