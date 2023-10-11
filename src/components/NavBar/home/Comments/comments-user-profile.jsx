import HomeSvg from '../../Assets/profile.svg'
import style from './commentsImage.module.css'
export const CommentsImage = ()=>{
    return(
        <section className={style.commentImg}>
            <img src={HomeSvg} alt="profile.svg" />
        </section>
        
    )
}