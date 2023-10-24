import { Link } from 'react-router-dom'
import style from '../../Profile/ViewProfile/viewProfile.module.css'
import { AddHome } from '../../Assets/add-Home'
import activity from '../Svgs/events.svg'
import { Buttons } from './UserButton/userButton'
export const User3 = ()=>{
    return(
        <main className={style.mainContainer}>
            <aside className={style.profileInfoContainer}>
                <section className={style.infoWithImg}>
                {/* <ViewProfileImage/> */}
                <img src='https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb02.jpg' alt="" /><br />
                    <span style={{fontSize:'26px',fontWeight:'500'}}>Diane Bogan</span><br />
                    <span>Tech Startups Space</span><br /><br />
                    <span style={{fontWeight:'300'}}>Mumbai India </span> <Link> Contact</Link><br />
                    <br />
                    <span>122 Connections</span>
                    <Buttons/>
                </section>
                
                <section className={style.about}>
                    <p style={{fontSize:'18px',fontWeight:'500'}}>About</p>
                    <p style={{fontSize:'15px',fontWeight:'300'}}>With a B.Tech in Civil Engineering and a passion for technology and willingness to learn and improve,
                     I am excited to embark on a new career as a Full Stack Developer.</p>
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
                            <span>Delhi Univercity , Delhi, India</span>
                        </li>
                        <li>
                            <p style={{fontWeight:'500'}}>Higher Secondary(12th)</p>
                            <span>Govt. Sr. Sec. School, Gurugram, Haryana, India</span>
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