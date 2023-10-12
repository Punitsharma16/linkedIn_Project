import { Link, NavLink } from "react-router-dom"
// import networkSvg from "./mynetwork.svg"
import { AddHome } from "../Assets/add-Home"
import style from './myNetwork.module.css'
import connection from './Svgs/connection.svg'
import followers from './Svgs/following.svg'
import group from './Svgs/groups.svg'
import events from './Svgs/events.svg'
import news from './Svgs/NewsLetter.svg'
import page from './Svgs/pages.svg'
import connectBtn from './Svgs/connectBtn.svg'
import { useEffect, useState } from "react"
import axios from "axios"
import { getHeaderWithAuthTokenAndProjectID } from "../../utils/config"
import { values } from "../home/home"
import { IdValue } from "../home/Comments/comment"
import { Users } from "./Users"

export const MyNetwork = ()=>{
    const [connect1,setConnect1Value] = useState(false);
    const [connect2,setConnect2Value] = useState(false);
    const [connect3,setConnect3Value] = useState(false);
    const [connect4,setConnect4Value] = useState(false);

    // const fetchUser = async ()=>{
    //     const config = getHeaderWithAuthTokenAndProjectID();
    //     try {
    //         const users = await axios.get(
    //             `https://academics.newtonschool.co/api/v1/linkedin/user/:${"64e354cd7811e6621b579352"}`,
    //         )
    //         // console.log(users);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     fetchUser();
    // },[])
    return(
        <main className={style.MyNetwork}>
            <section >
                <aside className={style.manageNetwork}>
                    <h4>Manage my network</h4>
                    <div className={style.div}>
                        <Link to='/mynetwork/connections'><p><img src={connection} alt="connections.." /> Connections</p></Link>
                        <p>4</p>
                    </div>
                    <div>
                        
                        <p><img src={followers} alt="follower.." /> Followings & followers</p>
                    </div>
                    <div>
                        
                        <p><img src={group} alt="group.." /> Groups</p>
                    </div>
                    <div>
                        
                        <Link to='/mynetwork/events'><img src={events} alt="events.." /> Events</Link>
                    </div>
                    <div className={style.div}>
                        <Link to="/mynetwork/newsletter"><p><img src={news} alt="news.." /> Newsletter</p></Link>
                        <p>0</p>
                    </div>
                    <div className={style.div}>
                        <p><img src={page} alt="page.." /> Pages</p>
                        <p>4</p>
                    </div>
                </aside>
                <AddHome/>
            </section>
            <section>
                <div className={style.invitions}>
                    <p>No pending invitations</p>
                    <a href="">Manage</a>
                </div>
                <div className={style.jobCenter}>
                    <h4>Job search smarter</h4>
                    <p>See who's viewed your profile and directly message recruiters with InMail.</p>
                    <section>
                        <div className={style.images}>
                            <div>
                            <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/387.jpg" alt="" />
                            <img src="https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb06.jpg" alt="" />
                            <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/651.jpg" alt="" />
                            </div>
                            <p>Members use premium</p>
                        </div>
                        <a href="/premium">Try Premium for free</a>
                    </section>
                </div>
                <section className={style.peopleContainer}>
                    <p>People you may know based on your recent activity</p>
                    <section className={style.knowPeoples}>
                        <main className={style.peoples}>
                            <img src='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1130.jpg' className={style.image} alt="img.." />
                            <span style={{fontWeight:'700'}}>Michelle Mayert</span>
                            <span style={{fontWeight:'400',fontSize:"15px"}}>Embedded Developer</span>
                            <p style={{fontSize:'14px',marginTop:'2rem'}}>Based on you profile</p>
                            <button onClick={()=>setConnect1Value(!connect1)} className={style.connectBtn}><img src={connectBtn} alt="logo.." />{!connect1?"Connect":"Pending.."}</button>
                        </main>
                        <main className={style.peoples}>
                            <img src='https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb06.jpg' className={style.image} alt="img.." />
                            <span style={{fontWeight:'700'}}>Aravindan Elango</span>
                            <span style={{fontWeight:'400',fontSize:"15px"}}>Data Science Hub</span>
                            <p style={{fontSize:'14px',marginTop:'2rem'}}>Based on you profile</p>
                            <button onClick={()=>setConnect2Value(!connect2)} className={style.connectBtn}><img src={connectBtn} alt="logo.." />{!connect2?"Connect":"Pending.."}</button>
                        </main>
                        <main className={style.peoples}>
                            <img src= 'https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb02.jpg' className={style.image} alt="img.." />
                            <span style={{fontWeight:'700'}}>Diane Bogan</span>
                            <span style={{fontWeight:'400',fontSize:"15px"}}>Tech Startups Space</span>
                            <p style={{fontSize:'14px',marginTop:'2rem'}}>Based on you profile</p>
                            <button onClick={()=>setConnect3Value(!connect3)} className={style.connectBtn}><img src={connectBtn} alt="logo.." />{!connect3?"Connect":"Pending.."}</button>
                        </main>
                        <main className={style.peoples}>
                            <img src='https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afae7.jpg' className={style.image} alt="img.." />
                            <span style={{fontWeight:'700'}}>Orlando Leannon</span>
                            <span style={{fontWeight:'400',fontSize:"15px"}}>Mobile App Makers</span>
                            <p style={{fontSize:'14px',marginTop:'2rem'}}>Based on you profile</p>
                            <button onClick={()=>setConnect4Value(!connect4)} className={style.connectBtn}><img src={connectBtn} alt="logo.." />{!connect4?"Connect":"Pending.."}</button>
                        </main>
                    </section>
                </section>
            </section>
            {/* <Users/> */}
        </main>
        // <div>Network</div>
    )
}