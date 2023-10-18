import React, { createContext, useEffect, useState } from 'react';
// import {token} from '../Assets/AuthToken'
// import axios from 'axios';
// import { getHeaderWithAuthTokenAndProjectID, userInfo } from '../../utils/config';
import { ProfileImage } from '../Assets/profileImage';
import commentSvg from './Comments/comment.svg'
import likeSvg from './like.svg'
// import { Comments } from './Comments/comment';
// import { LikeButton } from './like';
import { SentButton } from './SentButton';
// import { ProfileImageLogo } from '../Profile/ProfileImageLogo';
// import { ViewProfileImage } from '../Profile/ViewProfile/ViewprofileImage';
import { CommentsImage } from './Comments/comments-user-profile';
import { PostCreateDummy } from './PostDummy/PostCreateDummy';
import style from './PostCreate.module.css'
import { Link } from 'react-router-dom';
import styles from './postcard.module.css'

export const postModalContext = createContext();

function CreatePost() {
  // const data =  userInfo();
  // const {name} = data;
    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [posts, setPosts] = useState([]);
  // const [showPost,setShowPost] = useState(false);
  const [like,setLike] = useState(0);
  const [likeCount,setLikeCount] = useState(0);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [username,setName] = useState('');
  const [isComment,setIsComment] = useState(false);


  const [newPostModal,setNewPostModal] = useState(false);



  useEffect(() => {
    // Load posts from local storage when the component mounts
    // const userName = sessionStorage.getItem('userInfo');
    // const data = JSON.parse(userName);
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

 

  const handleAddPost = (e) => {
    e.preventDefault();
    if (title && content) {
      if (imageFile) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imageURL = event.target.result;
          const newPost = { title, content, imageURL };
          setPosts([...posts, newPost]);
          localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
        };

        reader.readAsDataURL(imageFile);
      } else {
        const newPost = { title, content };
        setPosts([...posts, newPost]);
        localStorage.setItem('posts', JSON.stringify([...posts, newPost]));
      }
      setTitle('');
      setContent('');
      setImageFile(null);
      setNewPostModal(false);
    }
  };

  useEffect(() => {
    // Save posts to local storage whenever the 'posts' state changes
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const reversePost = posts.reverse();

  useEffect(() => {
    
    if(newPostModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'unset'
    }
  }, [newPostModal]);


  const likePost = ()=>{
    setLikeCount(likeCount+1);
    if(likeCount%2===0){
      setLike(like+1);
      sessionStorage.setItem("like",JSON.stringify(like+1));
    }else{
      setLike(like-1);
      sessionStorage.setItem("like",JSON.stringify(like-1));
    }
    
  }

  useEffect(() => {
    // Load posts from local storage when the component mounts
    const like = sessionStorage.getItem('like');
    if (like) {
      setLike(JSON.parse(like));
    }
  }, [like]);

  const addComment = () => {
    if (newComment) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment('');

      // Save comments to local storage
      sessionStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };
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

  const printComments = comments.reverse();


  return (
    <main>
      <postModalContext.Provider value={{setNewPostModal}}>
           <PostCreateDummy/>
      </postModalContext.Provider>
      
    { newPostModal &&
    <main className={style.modalWrapper}>
      <form className={style.formContainer} onSubmit={handleAddPost}>
        <div style={{display:'flex',gap:'0.5rem',alignItems:'center',marginBottom:'2rem'}}>
        <ProfileImage/>
        <div>
        <span style={{fontSize:'20px',fontWeight:'700',}}> {username.name}</span><br />
        <span>post to anyone</span>
        </div>
        </div>
      {/* <label htmlFor="userInput">Enter Information:</label>*/}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onInput={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea
      className={style.textarea}
        placeholder="Content"
        value={content}
        onInput={(e) => setContent(e.target.value)}
        rows="10"
      />
      <br />
      <div className={style.footer}>
         <input
            class= {style.customFileInput}
             type="file"
             name="image"
             accept=".jpg, .jpeg, .png"
             onChange={(e) => setImageFile(e.target.files[0])}
          />
         <input type="submit" value="Create Post" />
      </div>
      
    </form>
    </main>
    }


    
     {reversePost.map((post,i)=>{
      return(
          <main className='post-container' key={i}>
              <Link to='/profile'>
              <section className='post-profile'>
                  {/* <img className='profile-image' src={ViewProfileImage} alt="profile.." /> */}
                  <CommentsImage/>
                  <div className='profile-name'>
                      <span style={{color:'#3d3d3d'}}>{username.name}</span>
                      <span style={{color:'#3d3d3d'}} className='profile-channel-name'>Frontend Developer || React.js || Node.js</span>
                  </div>
              </section>
              </Link>
                      <section>
                      <p>{post.title}</p>
                      <p>{post.content}</p>
                      </section>
                  
                  { post.imageURL && <img className='channel-image' src={post.imageURL} alt="" />}
              
              <section className='count-section'>
                  <p> <img src={likeSvg} alt="like" /> {like}</p>
                  <p>0 comments</p>
              </section>
              <hr />
              <section className='button-section'>
                  <button onClick={likePost} className='post-btn'> <img src={likeSvg} alt="like.." />Like</button>
                  <section>
                  <button onClick={()=>setIsComment(!isComment)} className='post-btn'><img src={commentSvg} alt="" />Comment</button>
                  {/* <Comments id={_id}/> */}
                  </section>
                  <SentButton/>
              </section>
              <section>
            { 
            isComment &&
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
                            <main className={styles.commentContainer} key={i}>
                                <section className={styles.commentProfile}>
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
  
      )
     })}
    </main>
  );
}

export default CreatePost;
