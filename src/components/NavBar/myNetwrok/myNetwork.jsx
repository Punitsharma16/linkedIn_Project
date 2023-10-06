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
import { useState } from "react"

export const MyNetwork = ()=>{
    const [connectValue,setConnectValue] = useState(false);
    const peoples = [
        {
            name:'Aravindan Elango',
            image: 'https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb06.jpg',
            work:'Embedded Developer',
            connection: 'Based on you profile'
        },
        {
            name:'Michelle Mayert',
            image:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1130.jpg',
            work:'Data Science Hub',
            connection:'Based on you profile'
        },
        {
            name:'Diane Bogan',
            image:'https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb02.jpg',
            work:'Tech Startups Space',
            connection:'Based on you profile'
        },
        {
            name:'Orlando Leannon',
            image:'https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afae7.jpg',
            work:'Mobile App Makers',
            connection:'Based on you profile'
        },
        // {
        //     name:'Terry Sauer',
        //     image:'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1130.jpg',
        //     work:'Data Science Hub',
        //     connection:'Based on you profile'
        // }
    ]

    const connectButton=()=>{
        setConnectValue(!connectValue);
    }
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
                        {
                            peoples.map((people)=>{
                                return(
                                    <main className={style.peoples}>
                                        <img src={people.image} className={style.image} alt="img.." />
                                        <span style={{fontWeight:'700'}}>{people.name}</span>
                                        <span style={{fontWeight:'400',fontSize:"15px"}}>{people.work}</span>
                                        <p style={{fontSize:'14px',marginTop:'2rem'}}>{people.connection}</p>
                                        <button onClick={connectButton} className={style.connectBtn}><img src={connectBtn} alt="logo.." />{!connectValue?"Connect":"Pending.."}</button>
                                    </main>
                                )
                            })
                        }
                    </section>
                </section>
            </section>
        </main>
        // <div>Network</div>
    )
}