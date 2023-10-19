// import { ProfileLogo } from "../../Profile/profileLogo"
import { CommentsImage } from "../Comments/comments-user-profile"
import style from './PostDummy.module.css'
import media from './media.svg'
import event from './Event.svg'
import { useContext } from "react"
import { postModalContext } from "../PostCreate"
import { Link } from "react-router-dom"

export const PostCreateDummy = ()=>{
const {setNewPostModal} = useContext(postModalContext);

    return(
        <main className={style.container}>
            <form>
                
                <div className={style.postCreate}>
                <Link to='/profile'>
                <CommentsImage/>
                </Link>
                <input type="text" name="title" id="" onFocus={()=>setNewPostModal(true)} placeholder="Start a Post"/>
                </div>
                
                <div className={style.otherOptions}>
                    <p style={{cursor:'pointer'}} onClick={()=>setNewPostModal(true)}> <img src={media} alt="icon.." /> Media</p>
                    <p style={{cursor:'pointer'}} onClick={()=>setNewPostModal(true)}><img src={event} alt="icon.." /> Event</p>
                </div>
            </form>
        </main>
    )
}