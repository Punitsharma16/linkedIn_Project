import { AddHome } from "../../Assets/add-Home"
import style from './newLetter.module.css'

export const NewsLetterBox = ()=>{
    return(
        <main className={style.mainContainer}>
            <section className={style.container}>
                <p>Newsletters</p>
                <hr />
                <span>0 Newsletter</span>
                <hr />
                <div>Empty</div>
            </section>
            <div>
            <AddHome/>
            </div>
        </main>
    )
}