import { useContext } from "react"
import { MsgModalContext } from "../../../../App"
import style from './msgModal.module.css'
// import { MsgModalContext } from "../../navbar";

export const MsgModal = ()=>{
    const {setMsgModal} = useContext(MsgModalContext);
    return(
        <section className={style.modal}>
            <div>
            <span>Currently working on it</span><br />
            <span style={{fontSize:'36px',fontWeight:'600',color:"#3d3d3d"}}>Feature Coming Soon</span>
            </div>

            <div>
            <button onClick={()=>setMsgModal(false)}>Close</button>
            </div>     
        </section>
    )
}