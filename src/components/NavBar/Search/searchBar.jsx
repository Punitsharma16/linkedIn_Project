import { Link, useOutletContext } from 'react-router-dom'
import './search.css'
import { seacrhContext, sendSearchVal } from '../../../App';
import { useContext } from 'react';
import { MyContext } from '../../utils/CustomContext';
// import { createContext } from 'react'
// import { createContext, useContext, useEffect, useState } from 'react';
// import { getHeaderWithProjectID } from '../../utils/config';
// import axios from 'axios';
// import { takeValue } from '../../../App';

export const SearchBar = ()=>{
    const {valueFormSearchBar} = useContext(seacrhContext);

    // const {setSearchVal} = useOutletContext(seacrhContext);

    // const [searchTerm, setSearchTerm] = useState('');/
    // const [filteredData, setFilteredData] = useState([]);
    // const [listOfPosts,setListOfPost] = useState([]);
    // const {getData} = useContext(takeValue);

    // const posts = async ()=>{
    //     const config = getHeaderWithProjectID();
    //     try {
    //         const posts = await axios.get(
    //             `https://academics.newtonschool.co/api/v1/linkedin/post?limit=100`,
    //             config,
    //         )
    //         console.log(posts);
    //         const newData = posts.data.data;
    //         console.log(newData);
    //         setListOfPost((prev)=>[...prev,...newData]);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(()=>{
    //     posts();   
    // },[]);

    // Filter the data based on name and title
//     const filtered = listOfPosts.filter(item =>
//       item.author.name.toLowerCase().includes(term.toLowerCase()) ||
//       item.title.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };
  
    return(
        <>
        
        <main className='searchBar'>
            <section style={{display:'flex',gap:'0.4rem'}}>
            <Link to='/home'><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="logo.." height="30px"/></Link>
            <input type="text" name="search" id="search" placeholder='search..' onChange={(e)=>valueFormSearchBar(e.target.value)}/>
            {/* <button>search</button> */}
            </section>
            <section>
            </section>  
        </main>
        </>
    )
} 