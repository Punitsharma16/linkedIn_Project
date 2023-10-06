import { useState } from "react"
import { getHeaderWithAuthTokenAndProjectID } from "../../utils/config";
import axios from "axios";
import {token} from '../Assets/AuthToken'
import './home.css'

export const CreateComment = ({id})=>{
    const [newComment,setNewComment] = useState({
        content:'',
    })
  //    console.log("id",id);
    const handleComment = (e)=>{
        const {name,value} = e.target;
        setNewComment({...newComment,[name]:value})
    }
  //  console.log(newComment);
  //  console.log(token);

    const createNewComment = async(newComment)=>{
    const config = {
            'Authorization': `Bearer ${token}`,
      projectID: "f104bi07c490",
    };
    try {
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/linkedin/comment/${id}`,
        { content: newComment.content },
        { headers: config }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    }

    const submitComment = (e)=>{
    e.preventDefault();
        createNewComment({...newComment});
  };
    return(
    <main className="comment-Box">
            <input type="text" name="content" id="comment" value={newComment.content} onChange={handleComment} />
      <button onClick={submitComment}>post</button>
    </main>
    )
}