import style from './primuim.module.css'
export const Premium = ()=>{
    return(
        <main className={style.premiumBox}>
            <p>Get hired 2x faster on average <span>by discovering
                 over 20 million open jobs <br /> and exploring valuable
                 resources to help with your search.</span></p>
                 <button className={style.premiumBtn}>Try Now</button>
            <section className={style.imageBoxes}>
                 <div className={style.premiumDiv}>
                    <p className={style.heading}>InMail credits</p>
                    <img className={style.hiring} src="https://www.israelhayom.com/wp-content/uploads/2021/04/Now-Hiring-Getty-Images-640x480.jpg" alt="load.." />
                    <h4>Connect with hiring managers </h4>
                    <p className={style.content}>Show your interest in an open role with InMail
                        .It's 2.6x more effetive then emails alone.</p>
                 </div>
                 <div  className={style.premiumDiv}>
                    <p className={style.heading}>Who's Viewed Your Profile</p>
                    <img className={style.viewProfile} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFFJ8lUBTaoHKuLx7E22NgGMSoPhdgKNVQXk_0jFRG7bg3YfoZ6zVKlvgmR5ddaWy1J4&usqp=CAU" alt="" />
                    <h4>Turn views into opportunities </h4>
                    <p className={style.content}>See who's viewed your profile over the last 90
                        days, and who looks next.</p>
                 </div>
                 <div className={style.premiumDiv}>
                    <p className={style.heading}>LinkedIn Learning courses</p>
                    <img className={style.courses} src="https://i.ytimg.com/vi/NzoDxzXbb-E/sddefault.jpg" alt="image.."/>
                    <h4>Sharpen your Skills </h4>
                    <p className={style.content}>Honw your skills or try something new - access over
                        15,000 experts-led LinkedIn Learning courses.</p>
                 </div>
            </section>     
        </main>
    )
}