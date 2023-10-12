import { Link } from 'react-router-dom'
import './search.css'
import { useEffect, useState } from 'react';
export const SearchBar = ()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const projectID = 'r8z30s3tojvg';
  
    // useEffect(() => {
    //   // Define the API endpoint with dynamic search term
    //   const apiUrl = `https://academics.newtonschool.co/api/v1/linkedin/post?filter={"title":"${searchTerm}"}`;
  
    //   // Fetch data from the API when the component mounts or searchTerm changes
    //   fetch(apiUrl, {
    //     headers: {
    //       'projectID': projectID,
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => setPosts(data))
    //     .catch((error) => console.error(error));
    // }, [searchTerm]);
  
    // const handleSearchInputChange = (event) => {
    //   setSearchTerm(event.target.value);
    // };
  
    return(
        <main className='searchBar'>
            <section style={{display:'flex',gap:'0.4rem'}}>
            <Link to='/home'><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="logo.." height="35px"/></Link>
            <input type="text" name="search" id="search" placeholder='search..' />
            </section>
            <section>
            </section>  
        </main>
    )
} 