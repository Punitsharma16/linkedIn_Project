import '../../home/home.css'
import commentSvg from './comment.svg'
import {token} from '../../Assets/AuthToken'
import { getHeaderWithAuthTokenAndProjectID } from '../../../utils/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { CreateComment } from './commentCreate';
// import { PostComments } from './comenstsOfPost';
export const Comments = ({id})=>{
    
    const [AllComments,setAllComments] = useState([]);
    // console.log("postID",id);
    // console.log(token);
    const fetchComments = async ()=>{
        const config = getHeaderWithAuthTokenAndProjectID();
        try {
            const comments = await axios.get(
                `https://academics.newtonschool.co/api/v1/linkedin/post/${id}/comments`,
                config,
            );
            // console.log(comments.data.data);
            setAllComments((comments.data.data.reverse()));
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchComments();
    },[id,token]);
    console.log((AllComments));
    // const reverseComments = AllComments.reverse();
    // console.log(reverseComments);
    

    return(
        <main>
            <section>
            {/* <button onClick={()=>setShowComments(true)} className='post-btn'><img src={commentSvg} alt="" />Comment</button> */}
            </section>
                <section>
                <CreateComment id={id}/>
                {
                    AllComments.map((comment,i)=>{
                        return <div className='commentBox' key={i}>{comment.content}</div>
                    })
                }
                
            </section>
            
        </main>
        

    )
}