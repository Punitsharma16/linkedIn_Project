import './home.css'
import likeSvg from './like.svg'
import {token} from '../Assets/AuthToken'
import { useContext, useEffect, useState } from 'react';
import { getHeaderWithAuthTokenAndProjectID, upVoteApi } from '../../utils/config';
import axios from 'axios';
import { postListContext } from './home';

 export const LikeButton = ({ id,likeCount}) => {
       const {setPostList} = useContext(postListContext);
       const [localLikeCount, setLocalLikeCount] = useState(likeCount);
       const [liked, setLiked] = useState(false);

       
  useEffect(() => {
    setLocalLikeCount(likeCount);
  }, [likeCount]);


        const handleUpVote = async (id) => {
          if (token) {
            try {
              if (liked) {
                setLocalLikeCount(localLikeCount - 1);
              } else {
                setLocalLikeCount(localLikeCount + 1);
              }
              const res = await upVoteApi(id);
              console.log(res);
              if (res.status) {
                setLiked(true);
                setPostList((prevFeedPosts) =>
                  prevFeedPosts.map((post) =>
                    post._id === id
                      ? { ...post, likeCount: localLikeCount }
                      : post
        
                  )
                );
              }else{
                setLiked(false);
                setPostList((prevFeedPosts) =>
                  prevFeedPosts.map((post) =>
                    post._id === id
                      ? { ...post, likeCount: localLikeCount }
                      : post
        
                  )
                );
              }
            } catch (error) {}
          } else {
            console.log(token);
          }
        };
    return(
        <section>
            
            <button onClick={() => handleUpVote(id)} className='post-btn'><img src={likeSvg} alt="like.." />Like</button>
        </section>
        
    )
}