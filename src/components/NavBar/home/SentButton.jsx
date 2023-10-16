 import { useContext, useState } from 'react'
import './home.css'
import style from './SentModal.module.css';
 import sentSvg from './sent.svg'
import { SentModal } from './sentButtonModel';
import { showModalContext } from '../navbar';
// import { showModalContext } from '../navbar';
// import { showModalContext } from '../FirstPage';
// import { showModalContext } from '../FirstPage';
// import { showModalContext } from '../../../App';

 export const SentButton = ()=>{
    const {setShowModal} = useContext(showModalContext)
    return(
        <section>
            <button onClick={()=>setShowModal(true)} className='post-btn'> <img src={sentSvg} alt="sent.." />Sent</button>
        </section>
        )
}