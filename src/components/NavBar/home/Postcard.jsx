import axios from 'axios';
import { getHeaderWithAuthTokenAndProjectID, userInfo } from '../../utils/config';
import { SentButton } from './SentButton';
import { Comments } from './Comments/comment';
import './home.css'
import { LikeButton } from './like';
import likeSvg from './like.svg'
// import CreatePost from './Comments/comment.svg';
import commentSvg from './Comments/comment.svg'
import { useContext, useEffect, useState } from 'react';
import { giveUser } from '../../../App';
import { CommentsImage } from './Comments/comments-user-profile';
import style from './postcard.module.css'


export const PostCard = (props)=>{
    // const {filter} = useContext(giveUser);
    // console.log(filter);
    // console.log(likes);
    const {title,content,author:{name,profileImage},_id,likeCount,commentCount,channel} = props;
    // console.log(props);
    // const [likes,setLikes] = useState(0);
    const [showComments,setShowComments] = useState(false);
    // const {setPostList} = props;


    const [likes,setLikes] = useState(0);
  const [count,setCount] = useState(0);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username,setName] = useState('');

  const likePosts = ()=>{
    setCount(count+1);
    if(count%2===0){
      setLikes(likes+1);
      sessionStorage.setItem("likes",JSON.stringify(likes+1));
    }else{
      setLikes(likes-1);
      sessionStorage.setItem("likes",JSON.stringify(likes-1));
    }
  }

  useEffect(() => {
    // Load posts from local storage when the component mounts
    const likes = sessionStorage.getItem('likes');
    if (likes) {
      setLikes(JSON.parse(likes));
    }
  }, [likes]);

    // end fetching users

   

  useEffect(() => {
    // Load comments from local storage when the component mounts
    const comments = sessionStorage.getItem('comments');
    const user = sessionStorage.getItem('userInfo');
    if (comments) {
      setComments(JSON.parse(comments));
    }
    if(user){
        setName(JSON.parse(user));
    }
  }, []);
  console.log(username.name);
// console.log(user);
    

  const addComment = () => {
    if (newComment) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment('');

      // Save comments to local storage
      sessionStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  const printComments = comments.reverse();


    return(
        <>
        
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
                <p> <img src={likeSvg} alt="like" /> {likes}</p>
                <p>0 comments</p>
            </section>
            <hr />
            <section className='button-section'>
                 <section>
                    <button onClick={likePosts} className='post-btn'>
                        <img src={likeSvg} alt="like.." />Like
                    </button>
                 </section>
                <section>
                <button onClick={()=>setShowComments(!showComments)} className='post-btn'><img src={commentSvg} alt="" />Comment</button>
                {/* <Comments id={_id}/> */}
                </section>
                <SentButton/>
            </section>
            <section>
            { 
            showComments &&
            <main>
              <div className="comment-Box">
                      <CommentsImage/>
                      <input type="text" name="content" id="comment" value={newComment} onInput={(e) => setNewComment(e.target.value)} placeholder="Add comments here.."/>
                  <div>
                      <button onClick={addComment}>post</button>
                  </div>
              </div>

              <section>
                {
                    printComments.map((comment,i)=>{
                        return(
                            <main className={style.commentContainer} key={i}>
                                <section className={style.commentProfile}>
                                    <CommentsImage/>
                                    <div>
                                    <span style={{fontSize:'18px',fontWeight:'500'}}>{username.name}</span><br />
                                    <span style={{fontSize:'15px',fontWeight:'300'}}>Full Stack Developer || React.js || Node.js</span>
                                    </div>
                                </section>
                                <p>{comment}</p>
                            </main>
                        )
                    })
                }
              </section>
              </main>
              
                }
            </section>
        </main>
    </>
    )
}