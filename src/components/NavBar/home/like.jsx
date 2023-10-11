import './home.css'
import likeSvg from './like.svg'
import {token} from '../Assets/AuthToken'
import { useContext, useEffect, useState } from 'react';
import { getHeaderWithAuthTokenAndProjectID, upVoteApi } from '../../utils/config';
import axios from 'axios';
import { postListContext } from './home';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { getHeaderWithAuthTokenAndProjectID } from 'your-header-util';
export const LikeButton = (props) => {
  const [isLike,setIslike] = useState(false);
  const { id, likeCount } = props
  // console.log(id, likeCount);
  // console.log(token);
  // const [counts, setCounts] = useState({ likeCount: likeCount });
  const handleUpvote = async () => {
    const config = getHeaderWithAuthTokenAndProjectID();
    try {
      const upvote = await axios.post(
        `https://academics.newtonschool.co/api/v1/linkedin/like/${id}`,
        {},
        { ...config }
      );
      // console.log(upvote);
      // Update the state immediately
      // setCounts({ likeCount: counts.likeCount + 1 });
      props.data({ likeCount: likeCount + 1 });
      setIslike(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <button onClick={handleUpvote} className='post-btn'>
        <img src={likeSvg} alt="like.." />{isLike ? 'Liked':'Like'}
      </button>
      {/* <p>Like Count: {counts.likeCount}</p> Display the updated like count */}
    </section>
  );
};