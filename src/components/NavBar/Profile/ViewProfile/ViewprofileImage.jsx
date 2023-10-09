import HomeSvg from '../../Assets/profile.svg'
import style from './viewProfile.module.css'
export const ViewProfileImage = ()=>{
    return(
        <section className={style.profileImgView}>
            <img src={HomeSvg} alt="profile.svg" />
        </section>
        
    )
}