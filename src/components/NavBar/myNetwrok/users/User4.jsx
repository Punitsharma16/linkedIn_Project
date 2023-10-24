import { Link } from 'react-router-dom'
import style from '../../Profile/ViewProfile/viewProfile.module.css'
import { AddHome } from '../../Assets/add-Home'
import activity from '../Svgs/events.svg'
import { Buttons } from './UserButton/userButton'
export const User4 = ()=>{
    return(
        <main className={style.mainContainer}>
            <aside className={style.profileInfoContainer}>
                <section className={style.infoWithImg}>
                {/* <ViewProfileImage/> */}
                <img src='https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afae7.jpg' alt="" /><br />
                    <span style={{fontSize:'26px',fontWeight:'500'}}>Orlando Leannon</span><br />
                    <span>Mobile App Makers</span><br /><br />
                    <span style={{fontWeight:'300'}}>Mumbai India </span> <Link> Contact</Link><br />
                    <br />
                    <span>533 Connections</span>
                    <Buttons/>
                </section>
                
                <section className={style.about}>
                    <p style={{fontSize:'18px',fontWeight:'500'}}>About</p>
                    <p style={{fontSize:'15px',fontWeight:'300'}}>Hi there! I am a skilled frontend developer with expertise in HTML,
                     CSS, JavaScript, React. I also have experience working with Node.js and MongoDB, . With a passion for coding and a desire to constantly improve my skills and knowledge,
                     I am dedicated to creating engaging and user-friendly web applications</p>
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
                            <span>B.Sc Computer Science</span><br />
                            <span>Sonipat, Haryana, India</span>
                        </li>
                        <li>
                            <p style={{fontWeight:'500'}}>Higher Secondary(12th)</p>
                            <span>Govt. Sr. Sec. School, Hisar, Haryana, India</span>
                        </li>
                        <li>
                            <p style={{fontWeight:'500'}}>Matriculation(10th)</p>
                            <span>Ips sr. sec. School, Bhiwani, Haryana India</span>
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