import { useContext, useState } from 'react'
import style from './SentModal.module.css'
import { showModalContext } from '../navbar';
// import { showModalContext } from '../navbar';
// import { showModalContext } from '../FirstPage';
// import { showModalContext } from '../FirstPage';
// import { showModalContext } from '../../../App';
export const SentModal = ()=>{
    const {setShowModal} = useContext(showModalContext);
    const modalData = [
        {
            name:"Kurt Nicolas",
        profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb37.jpg",
        position: 'React Community'
        },
        {
            name: "Michelle Mayert",
           profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb2f.jpg",
           position: "Open Source Supporters"
        },
        {
            name: "Orlando Leannon",
            profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afafa.jpg",
            position: 'Mobile App Makers'
        },
        {
            name: "Marlene Ward-Cummerata",
            profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb02.jpg",
            position: 'Frontend Fanatics'
        }
    ]

    const haldleSentButton = ()=>{
        alert('Sent Successfully')
        setShowModal(false);
        
    }
    // console.log(check);
    return(
        <main className={style.modal}>
            <button onClick={()=>setShowModal(false)} className={style.crossBtn}>x</button>
            {
        modalData.map((user)=>{
            return(
                
                <section className={style.modalBox}>
                    <section className={style.modalElement}>
                    <img src={user.profileImage} alt="load.." />
                    <div>
                    <p>{user.name}<br/><span>{user.position}</span></p>
                    </div>
                    </section>
                    <section className={style.checkbox}>
                        <input type="checkbox" name="" id="check" />
                    </section>
                    
                </section>
            )
        })
    }
    <button onClick={haldleSentButton} className={style.sentBtn}>Sent</button>
        </main>
    )
}