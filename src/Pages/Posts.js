import { useParams } from "react-router-dom";
function Posts(){
    let params = useParams()
    let {id} = params
    return(
        <>
        <h1>Posts do Pokemon: {id}</h1>
        </>
    )
}
export default Posts