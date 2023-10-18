import { AddHome } from "../../Assets/add-Home"
import style from './newLetter.module.css'

export const NewsLetterBox = ()=>{
    return(
        <main className={style.mainContainer}>
            <section className={style.container}>
                <p>Newsletters</p>
                <hr style={{borderTop:'#ddd'}}/>
                <span>0 Newsletter</span>
                <hr style={{borderTop:'#ddd'}}/>
                <div>Empty</div>
            </section>
            <div className="hide">
            <AddHome/>
            </div>
        </main>
    )
}