 import { Navigate } from "react-router-dom"
import {token} from "../NavBar/Assets/AuthToken"
 export const AuthNavigater = ({children})=>{
    if(!token){
        return <Navigate to="/login" replace/>
    }else{
        return children;
    }
}