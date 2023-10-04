import axios from 'axios';
import { getHeaderWithAuthTokenAndProjectID } from '../../utils/config';
import { SentButton } from './SentButton';
import { Comments } from './comment';
import './home.css'
import { LikeButton } from './like';
import likeSvg from './like.svg'
export const PostCard = (props)=>{
    const {title,content,author:{name,profileImage},_id,likeCount,commentCount,channel} = props;
    console.log(props);
    // console.log(title);
    //  console.log(channel.owner);

    return(
        <main className='post-container'>
            <section className='post-profile'>
                <img className='profile-image' src={profileImage} alt="profile.." />
                
                <div className='profile-name'>
                    <span>{name}</span>
                    <span className='profile-channel-name'>{channel.name}</span>
                </div>
            </section>
            <section>
                <p>{title}</p>
                <p>{content}</p>
                <img className='channel-image' src={channel.image} alt="" />
            </section>
            <section className='count-section'>
                <p> <img src={likeSvg} alt="like" /> {likeCount}</p>
                <p>{commentCount} comments</p>
            </section>
            <hr />
            <section className='button-section'>
                <LikeButton id={_id} likeCount={likeCount}/>
                <section>
                <Comments id={_id}/>
                </section>
                <SentButton/>
            </section>
        </main>
    )
}