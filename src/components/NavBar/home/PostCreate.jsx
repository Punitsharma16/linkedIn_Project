import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import {token} from '../Assets/AuthToken'
import axios from 'axios';
import { getHeaderWithAuthTokenAndProjectID, userInfo } from '../../utils/config';
import { ProfileImage } from '../Assets/profileImage';
import commentSvg from './Comments/comment.svg'
import likeSvg from './like.svg'
import { Comments } from './Comments/comment';
import { LikeButton } from './like';
import { SentButton } from './SentButton';
import { ProfileImageLogo } from '../Profile/ProfileImageLogo';
import { ViewProfileImage } from '../Profile/ViewProfile/ViewprofileImage';
import { CommentsImage } from './Comments/comments-user-profile';
import { PostCreateDummy } from './PostDummy/PostCreateDummy';
import style from './PostCreate.module.css'
import { Link } from 'react-router-dom';

export const postModalContext = createContext();

function CreatePost() {
  const data =  userInfo();
  const {name} = data;
    const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [posts, setPosts] = useState([]);
  // const [showPost,setShowPost] = useState(false);

  const [newPostModal,setNewPostModal] = useState(false);



  useEffect(() => {
    // Load posts from local storage when the component mounts
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
  }, [newPostModal])

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
        <span style={{fontSize:'20px',fontWeight:'700',}}> {name}</span><br />
        <span>post to anyone</span>
        </div>
        </div>
      {/* <label htmlFor="userInput">Enter Information:</label>*/}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/>
      <textarea
      className={style.textarea}
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
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
                      <span style={{color:'#3d3d3d'}}>{name}</span>
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
                  <p> <img src={likeSvg} alt="like" /> 0</p>
                  <p>0 comments</p>
              </section>
              <hr />
              <section className='button-section'>
                  <LikeButton/>
                  <section>
                  <button className='post-btn'><img src={commentSvg} alt="" />Comment</button>
                  {/* <Comments id={_id}/> */}
                  </section>
                  <SentButton/>
              </section>
              <section>
              
                  <Comments/>
              </section>
  
  
              </main>
  
      )
     })}
    </main>
  );
}

export default CreatePost;
