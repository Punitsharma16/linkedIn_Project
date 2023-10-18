import { Link } from 'react-router-dom'
import style from './event.module.css'
export const Event =()=>{
    return(
        <main className={style.events}>
            <section className={style.eventContainer}>
                <div>
                    <p style={{margin:'1rem',fontSize:"18px"}}>Events</p>
                    <hr />
                </div>
                <div className={style.container}>
                    <img src="https://img.freepik.com/premium-vector/young-girl-feeling-excited-raising-arms-when-finishing-her-project-assignment_202358-29.jpg?w=740" alt="image.." />
                    <span style={{fontSize:'28px',marginTop:'2rem'}}>No events</span>
                    <p style={{fontSize:'18px'}}>Looks like you are not attending any events.</p>
                </div>
            </section>
            <section>
            <Link className='hide' to='/jobs'><img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="imageLoad.." /></Link>
            </section>
        </main>
    )
}