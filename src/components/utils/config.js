import axios from 'axios';
import {token} from '../NavBar/Assets/AuthToken'
const PROJECT_ID = "r8z30s3tojvg";
export const getHeaderWithProjectIDAndBody= ()=>{
    return{
        headers:{projectId:PROJECT_ID, 'Content-Type': 'application/json'}
    }
}
export const getHeaderWithProjectID = ()=>{
    return{
        headers: {projectId:PROJECT_ID}
    }
}
export const getHeaderWithAuthTokenAndProjectID = ()=>{
    return{
        headers: { 'Authorization': `Bearer ${token}`, projectId:PROJECT_ID}
    }
}

const userData = sessionStorage.getItem('userInfo');
const dataObject = JSON.parse(userData);
// const {name,email} = dataObject;

export const userInfo = ()=>{
    return dataObject;
}
console.log(userData);

export const upVoteApi = async (postID) => {
  
    const headers = getHeaderWithAuthTokenAndProjectID();
  
    try {
      const res = await axios.post(
        `https://academics.newtonschool.co/api/v1/linkedin/like/${postID}`,
        {},
        headers
      );
  
      console.log(res);
      return (res.data)
    } catch (error) {
      console.log(error);
      return (error.message)
    }
    // unable to make API calls using JWt
  };