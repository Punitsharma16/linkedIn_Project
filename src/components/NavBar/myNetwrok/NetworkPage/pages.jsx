import { Link } from 'react-router-dom'
import style from './pages.module.css'
export const NetworkPage = ()=>{
    return(
        <main className={style.container}>
            <section className={style.body}>
                <span>Pages</span>
                <hr />
                <div className={style.imageContainer}>
                    <img src="https://img.freepik.com/premium-vector/office-workplace-web-concept-man-working-graphic-tablet-sitting-chair-room-with-decor-freelancer-remote-worker_198565-334.jpg?w=740" alt="" />
                    <p>No pages followed</p>
                </div>
            </section>
            <Link className='hide' to='/jobs'><img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="imageLoad.." /></Link>
        </main>
    )
}