import HomeSvg from './profile.svg'
import style from './profile.module.css'
import down from './down.svg'
export const ProfileLogo = ()=>{
    return(
        <main className={style.container}>
            <section className={style.profileImg}>
            <img src={HomeSvg} alt="profile.svg" />
            </section>
            <span>Me <img src={down} alt="-" /></span>
        </main>
        
        
    )
}