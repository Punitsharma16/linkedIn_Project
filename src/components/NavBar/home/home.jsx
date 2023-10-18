import { NavLink, Outlet } from "react-router-dom"
import homeSvg from "./home.svg"
import {token} from '../Assets/AuthToken'
import { createContext, useContext, useEffect, useState } from "react"
import { getHeaderWithProjectID } from "../../utils/config"
import axios from "axios"
import { PostCard } from "./Postcard"
import { LinkedinNews } from "./News"
import { HomeProfile } from "./HomeProfile"
import { DiscoverContainer } from "./discoverMore"
import { AddHome } from "../Assets/add-Home"
import CreatePost from "./PostCreate"
import { PostCreateDummy } from "./PostDummy/PostCreateDummy"
import { AppNavbar } from "../navbar"

export const postListContext = createContext();
export const Home = ()=>{
    // console.log('token',token);
    const [postList,setPostlist] = useState([]);
    const [page,setPage] = useState(1);
    const [isLoading,setIsLoading] = useState(false);


    const fetchPosts = async ()=>{
        const config = getHeaderWithProjectID();
        try {
            const posts = await axios.get(
                `https://academics.newtonschool.co/api/v1/linkedin/post?limit=10&page=${page}`,
                config,
            )
            console.log(posts);
            const newData = posts.data.data;
            setPostlist((prev)=>[...prev,...newData]);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(true);
            console.log(error);
        }
    };
    useEffect(()=>{
        setIsLoading(true);
        fetchPosts();   
    },[page]);

    const handleScrolling = ()=>{
        const a = document.documentElement.scrollTop;
		const b = document.documentElement.scrollHeight;
		const c = a+window.innerHeight+100;
        if(!isLoading && c>b){
            setPage(prev=>prev+1);
        }
    }
    // console.log(token);

    useEffect(()=>{
        window.addEventListener("scroll", handleScrolling);

    return () =>  window.removeEventListener("scroll", handleScrolling);
    },[]);
    console.log(postList);
    return(
        <>
        {/* <AppNavbar/> */}
        {/* <Outlet/> */}
        <main className="home-Page">
            <section className="all-post">
                <section>
                        <HomeProfile/>
                        <DiscoverContainer/>
                </section>
                <section>
                    {/* <PostCreateDummy/> */}
                <CreatePost/>
                { 
                postList.map((post,i)=>(
                    <postListContext.Provider value={setPostlist}>
                        <PostCard key={i} {...post}/>
                    </postListContext.Provider>
                ))
                 }
                </section>
                <section>
                <LinkedinNews/>
                <AddHome/>
                </section>
            </section>
        </main>
    </>
        
    )
}