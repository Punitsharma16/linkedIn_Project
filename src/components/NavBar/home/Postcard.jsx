import axios from 'axios';
import { getHeaderWithAuthTokenAndProjectID } from '../../utils/config';
import { SentButton } from './SentButton';
import { Comments } from './Comments/comment';
import './home.css'
import { LikeButton } from './like';
import likeSvg from './like.svg'
// import CreatePost from './Comments/comment.svg';
import commentSvg from './Comments/comment.svg'
import { useEffect, useState } from 'react';


export const PostCard = (props)=>{
    // console.log(likes);
    const {title,content,author:{name,profileImage},_id,likeCount,commentCount,channel} = props;
    // console.log(props);
    const [likes,setLikes] = useState({ likeCount: likeCount });
    const [showComments,setShowComments] = useState(false);


    const {setPostList} = props;

    // console.log(title);
    //  console.log(channel.owner);

    // fetching users
    // console.log(_id);
    // const fetchingUSer = async ()=>{
    //     const config = getHeaderWithAuthTokenAndProjectID();
    //     try {
    //         const user = await axios.get(
    //             `https://academics.newtonschool.co/api/v1/linkedin/user/${_id}`,
    //             {},
    //             config,
    //         );
    //         console.log(user);
    //         // console.log(_id);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(()=>{
    //     fetchingUSer();
    // },[])

    const getLikeValue = (likes)=>{
        setLikes(likes);
    }
    // console.log(likes);


    // end fetching users

    return(
        <main className='post-container' key={_id}>
            
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
                <p> <img src={likeSvg} alt="like" /> {likes.likeCount}</p>
                <p>{commentCount} comments</p>
            </section>
            <hr />
            <section className='button-section'>
                <LikeButton data={getLikeValue} id={_id} likeCount={likeCount}/>
                <section>
                <button onClick={()=>setShowComments(!showComments)} className='post-btn'><img src={commentSvg} alt="" />Comment</button>
                {/* <Comments id={_id}/> */}
                </section>
                <SentButton/>
            </section>
            <section>
            { 
            showComments &&
                <Comments id={_id}/>
                }
            </section>
        </main>
    )
}