// import { NavLink } from "react-router-dom"
// import msgSvg from "./message.svg"
import style from './msg.module.css'
import { AddHome } from "../Assets/add-Home"
import { useContext } from "react"
// import { MsgModalContext } from "../navbar"
import { MsgModalContext } from "../../../App"
export const Message = ()=>{
    const {setMsgModal} = useContext(MsgModalContext);
    return(
       <main className={style.msgContainer}>
        <section className={style.msgBox}>
            <section className={style.msgBody}>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLUE3Qe9cdXqBSLizxgxvMIa3blfNPa3X0rrMpnTk3y95RTYjL" alt="Load-Image.." />
                <p>No messages yet</p>
                <span>Reach out and start a conversation to</span> 
                <span>advance your career</span> 
                 <button onClick={()=>setMsgModal(true)}>Send a message</button>
            </section>
        </section>
        <div>
            <AddHome/>
        </div>
       </main>
    )
}