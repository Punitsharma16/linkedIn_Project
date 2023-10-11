import { Link, NavLink, useNavigate } from "react-router-dom"
import notificationSvg from "./notification.svg"
import { AddHome } from "../Assets/add-Home"
import style from './navbar.module.css'

export const Notification = ()=>{
    const navigate = useNavigate();
    return(
        <main className={style.container}>
            <section className={style.sideLeft}>
                <span style={{fontWeight:'400', fontSize:'18px'}}>Manage your <br /> account</span><br />
                <br />
                <Link>View Account</Link>
            </section>
            <div>
                 <section className={style.heading}>
                     <p>Notifications</p>
                 </section>
                 <section className={style.NotificationContainer}>
                    <ul>
                        <li>
                            <span>Talking facts during a managerial job interview can work wonders,
                                 says this career coach.</span>
                        </li>
                        <hr />
                        <li>
                            <span>
                                Web Development -opportunities in India
                            </span><br />
                            <button onClick={()=>navigate('/jobs')}>View jobs</button>
                        </li>
                        <hr />
                        <li>
                            <span>
                                Your Wednesday Daily Rundown. eV firms spark campus hiring;<br />
                                Indian It eyes new markets; and other top news for you
                            </span>
                        </li>
                        <hr />
                        <li>
                            <span>
                                Anubudh is hiring: FullStack Intern. See this and 4 other job recommendations
                            </span><br />
                            <button onClick={()=>navigate('/jobs')}>View Jobs</button>
                        </li>
                        <hr />
                    </ul>
                 </section>
            </div>
            
            <section>
                <AddHome/>
            </section>
        </main>
    )
}