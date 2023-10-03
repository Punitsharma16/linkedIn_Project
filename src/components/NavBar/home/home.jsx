import { NavLink } from "react-router-dom"
import homeSvg from "./home.svg"
import {token} from '../Assets/AuthToken'
import { useEffect, useState } from "react"
import { getHeaderWithProjectID } from "../../utils/config"
import axios from "axios"
import { PostCard } from "./Postcard"
export const Home = ()=>{
    console.log('token',token);
    const [postList,setPostlist] = useState([]);

    const fetchPosts = async ()=>{
        const config = getHeaderWithProjectID();
        try {
            const posts = await axios.get(
                'https://academics.newtonschool.co/api/v1/linkedin/post',
                config,
            )
            console.log(posts);
            setPostlist(posts.data.data)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchPosts();   
    },[]);
    console.log(postList);
    return(
        <main>
            {/* <section>
            <div className="home-logo">
            <img src={homeSvg} alt="logo.." />
            <NavLink to="/home">Home</NavLink>
            </div>
            </section> */}
            <section>
            {
                postList.map((post,i)=>(<PostCard key={i} {...post}/>))
            }
            </section>
        </main>
        
        
    )
}