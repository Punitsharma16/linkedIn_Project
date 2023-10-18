import { useNavigate } from 'react-router-dom'
import { AddHome } from '../../Assets/add-Home'
import style from './analitical.module.css'
export const SeenProfile = ()=>{
    const navigate = useNavigate();
    return(
        <main className={style.container}>
            <aside>
            <section className={style.heading}>
                <p>Who's viewed your profile</p>
            </section>
            <section className={style.body}>
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQLUE3Qe9cdXqBSLizxgxvMIa3blfNPa3X0rrMpnTk3y95RTYjL" alt="Load-Image.." />
                <p style={{fontWeight:'500'}}>No profile views</p>
                <span style={{fontWeight:'300'}}>Complete your profile to increase your chances of being
                     discovered by the right people for<span/>
                     </span>< span style={{fontWeight:'300'}}> the right opportunity.</span>
                <button onClick={()=>navigate('/profile')}>Edit Profile</button>
            </section>
            </aside>

            <aside style={{margin:'1rem'}} className='hide'>
                <AddHome/>
            </aside>
        </main>
    )
}