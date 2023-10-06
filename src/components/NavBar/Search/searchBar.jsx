import { Link } from 'react-router-dom'
import './search.css'
export const SearchBar = ()=>{
    return(
        <main className='searchBar'>
            <Link to='/home'><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="logo.." height="40px"/></Link>
            <input type="text" name="search" id="search" placeholder='search..' />
        </main>
    )
} 