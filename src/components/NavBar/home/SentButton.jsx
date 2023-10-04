 import './home.css'
 import sentSvg from './sent.svg'
 export const SentButton = ()=>{
    return(
        <section>
            <button className='post-btn'> <img src={sentSvg} alt="sent.." />Sent</button>
        </section>
        )
}