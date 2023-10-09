import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../../utils/config"
import { ProfileImage } from "../../Assets/profileImage"
import style from './activity.module.css'

export const Activity = ()=>{
    const navigate = useNavigate();
    const data = userInfo();
    const {name} = data;
    return(
        <main className={style.container}>
            <aside>
                <section className={style.activityUser}>
                      <ProfileImage/>
                      <span style={{fontSize:'20px'}}>{name}</span>
                      <span style={{fontSize:'14px',fontWeight:'300'}}>Full Stack Developer ||</span>
                      <span style={{fontSize:'14px',fontWeight:'300'}}>React.js || Node.js</span>
                      <hr />
                      <div className={style.follow}>
                        <p>Followers</p>
                        <p><Link>4</Link></p>
                      </div>
                </section>
            </aside>
            <aside className={style.midBody}>
                <section >
                <p>All activity</p>
                <button onClick={()=>navigate('/home')}>Posts</button>
                <hr/>
                </section>
                <section className={style.midBodyBody}>
                <img src="https://img.freepik.com/premium-vector/body-warm-up-exercise-workspace-home-fitness-training_81894-8380.jpg?w=740" alt="" />
                <p style={{fontWeight:'500',fontSize:'18px'}}>Nothing to see for now</p>
                <span style={{fontWeight:'300',fontSize:'14px'}}>Content you post, share, react to, or</span>
                <span style={{fontWeight:'300',fontSize:'14px'}}>comment on will be displayed here.</span>
                </section> 
            </aside>
            <aside>
                  <Link to='/jobs'><img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="imageLoad.." /></Link>
            </aside>
        </main>
    )
}