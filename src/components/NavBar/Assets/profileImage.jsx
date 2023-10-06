import HomeSvg from './profile.svg'
import './profileImage.css'
export const ProfileImage = ()=>{
    return(
        <section className='profile-img'>
            <img src={HomeSvg} alt="profile.svg" />
        </section>
        
    )
}