import { useEffect, useState } from "react"
import '../../home/home.css'
import { getHeaderWithAuthTokenAndProjectID } from "../../../utils/config";
import axios from "axios";
import {token} from '../../Assets/AuthToken'
import { CommentsImage } from "./comments-user-profile";

export const CreateComment = ()=>{
    const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Load comments from local storage when the component mounts
    const comments = sessionStorage.getItem('comments');
    if (comments) {
      setComments(JSON.parse(comments));
    }
  }, []);

  const addComment = () => {
    if (newComment) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setNewComment('');

      // Save comments to local storage
      sessionStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

    
    return(
        <main>
            <div className="comment-Box">
                <CommentsImage/>
                <input type="text" name="content" id="comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Add comments here.."/>
                <div>
                <button onClick={addComment}>post</button>
                 </div>
            </div>
            
        </main>
    )
}