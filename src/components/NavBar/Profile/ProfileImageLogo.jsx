import HomeSvg from './profile.svg'
// import './profileImage.css'
import style from './profile.module.css'
export const ProfileImageLogo = ()=>{
    return(
        <section className={style.profileModalLogo}>
            <img src={HomeSvg} alt="profile.svg" />
        </section>
        
    )
}