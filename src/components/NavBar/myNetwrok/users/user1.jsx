import { Link } from 'react-router-dom'
import style from '../../Profile/ViewProfile/viewProfile.module.css'
import { AddHome } from '../../Assets/add-Home'
import activity from '../Svgs/events.svg'
import { Buttons } from './UserButton/userButton'
import { useState } from 'react'
export const User1 = ()=>{
    return(
        <main className={style.mainContainer}>
            <aside className={style.profileInfoContainer}>
                <section className={style.infoWithImg}>
                {/* <ViewProfileImage/> */}
                <img src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1130.jpg' alt="" /><br />
                    <span style={{fontSize:'26px',fontWeight:'500'}}>Michelle Mayert</span><br />
                    <span>Embedded Developer|| Node.js</span><br /><br />
                    <span style={{fontWeight:'300'}}>Banglore India </span> <Link> Contact</Link><br />
                    <br />
                    <span>68 Connections</span>
                    <Buttons/>
                </section>
                
                <section className={style.about}>
                    <p style={{fontSize:'18px',fontWeight:'500'}}>About</p>
                    <p style={{fontSize:'15px',fontWeight:'300'}}>I am a Full Stack Web Developer with primary skills - HTML5, CSS3,
                     JavaScript, React.js v18, and secondary skills - Java v8, Node.js, Express.js and MongoDB.
                     I am a quick learner with ability to learn new technologies and have excellent communication skills.</p>
                </section>
                <section className={style.resources}>
                    <div>
                        <span style={{fontWeight:'500'}}><img src={activity} alt="" /> Activity</span><br />
                        <span>See what you've shared with you newtwork, such as posts, articles, and comments</span>
                    </div>
                    <br />
                </section>
                
                <section className={style.experience}>
                    <span style={{fontSize:'18px',fontWeight:'500'}}>Experience</span><br />
                    <br />
                    <span style={{fontSize:'20px'}}>No Experience Yet</span>
                </section>
                <section className={style.education}>
                    <span  style={{fontSize:'18px',fontWeight:'500'}}>Education</span><br /><br />
                    <ul>
                        <li>
                            <p style={{fontWeight:'500'}}>Gradution</p>
                            <span>B.tech</span><br />
                            <span>Textile Institude Of Tecnology, Bhiwani, Haryana India</span>
                        </li>
                        <li>
                            <p style={{fontWeight:'500'}}>Higher Secondary(12th)</p>
                            <span>Vaish Modal Public School, Bhiwani, Haryana India</span>
                        </li>
                        <li>
                            <p style={{fontWeight:'500'}}>Matriculation(10th)</p>
                            <span>Vaish Modal Public School, Bhiwani, Haryana India</span>
                        </li>
                    </ul>
                </section>
            </aside>
            <aside className={style.sideElements}>
            <div className={style.img}>
        <Link to='/jobs'><img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="imageLoad.." /></Link>
                </div>
                <div className={style.add}><AddHome/></div>
                
            </aside>
        </main>
    )
}