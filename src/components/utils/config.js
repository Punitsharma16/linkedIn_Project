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