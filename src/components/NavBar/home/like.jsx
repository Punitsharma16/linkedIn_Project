import './home.css'
import likeSvg from './like.svg'
import {token} from '../Assets/AuthToken'
import { useState } from 'react';
import { getHeaderWithAuthTokenAndProjectID } from '../../utils/config';
import axios from 'axios';
export const LikeButton = ({id,likeCount})=>{
    console.log(id,likeCount);
  console.log(token);
    const [counts,setCounts] = useState(likeCount);
    const handleUpvote = async ()=>{
    const config = getHeaderWithAuthTokenAndProjectID();
    try {
      const upvote = await axios.post(
        `https://academics.newtonschool.co/api/v1/linkedin/like/${id}`,
        {},
        { ...config }
      );
      setCounts(counts + 1);
    } catch (error) {
      console.log(error);
    }
    }
    return (
      <section>
        <button onClick={handleUpvote} className="post-btn">
          <img src={likeSvg} alt="like.." />
          Like
        </button>
      </section>
    );
}