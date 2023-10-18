import './home.css'
import likeSvg from './like.svg'
// import {token} from '../Assets/AuthToken'
import {useEffect, useState } from 'react';
// import { getHeaderWithAuthTokenAndProjectID, upVoteApi } from '../../utils/config';
// import axios from 'axios';
// import { postListContext } from './home';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { getHeaderWithAuthTokenAndProjectID } from 'your-header-util';
export const LikeButton = (props) => {
  const [likes,setLikes] = useState(0);
  const [count,setCount] = useState(0);

  const likePosts = ()=>{
    setCount(count+1);
    if(count%2===0){
      setLikes(likes+1);
      sessionStorage.setItem("likes",JSON.stringify(likes+1));
    }else{
      setLikes(likes-1);
      sessionStorage.setItem("likes",JSON.stringify(likes-1));
    }
    props.data(likes);
  }

  useEffect(() => {
    // Load posts from local storage when the component mounts
    const likes = sessionStorage.getItem('like');
    if (likes) {
      setLikes(JSON.parse(likes));
    }
  }, [likes]);
  return (
    <section>
      <button onClick={likePosts} className='post-btn'>
        <img src={likeSvg} alt="like.." />Like
      </button>
      {/* <p>Like Count: {counts.likeCount}</p> Display the updated like count */}
    </section>
  );
};