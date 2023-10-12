import { useState } from "react"
import '../../home/home.css'
import { getHeaderWithAuthTokenAndProjectID } from "../../../utils/config";
import axios from "axios";
import {token} from '../../Assets/AuthToken'
// import './home.css'
// import { ProfileImage } from "../../Assets/profileImage";
import { CommentsImage } from "./comments-user-profile";
// import { useEffect } from "react";

export const CreateComment = ({id})=>{
    const [newComment,setNewComment] = useState({
        content:'',
    })
//    console.log("id",id);
    const handleComment = (e)=>{
        const {name,value} = e.target;
        setNewComment({...newComment,[name]:value})
    }
 console.log(newComment);
//  console.log(token);

    const createNewComment = async(newComment)=>{
        const config = getHeaderWithAuthTokenAndProjectID();
        try {
            const res = await axios.post(
                `https://academics.newtonschool.co/api/v1/linkedin/comment/${id}`,
                newComment,
                config,
            )
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const submitComment = (e)=>{
        e.preventDefault();
        createNewComment(newComment);
    };

    
    return(
        <main >
            <div className="comment-Box">
                <CommentsImage/>
                <input type="text" name="content" id="comment" value={newComment.content} onChange={handleComment} placeholder="Add comments here.."/>
                <div>
                <button onClick={submitComment}>post</button>
                 </div>
                </div>
            
        </main>
    )
}