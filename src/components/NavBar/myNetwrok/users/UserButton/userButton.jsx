import { useNavigate } from 'react-router-dom'
import style from './userButton.module.css'
import { useState } from 'react';
export const Buttons = ()=>{
    const navigate = useNavigate();
    const [buttonVal,setButtonVal] = useState(false);
    return(
        <main className={style.Buttons}>
            <button onClick={()=>setButtonVal(!buttonVal)} style={{backgroundColor:'blue',color:'#fff'}}>{buttonVal?'Pending':'Connect'}</button>
            <button onClick={()=>navigate('/message')}>Message</button>
        </main>
    )
}