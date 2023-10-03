const PROJECT_ID = " f104bi07c490";
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