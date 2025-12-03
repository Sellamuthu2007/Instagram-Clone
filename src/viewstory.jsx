import  useFetch  from './useFetch.jsx';
import { useParams,useNavigate } from "react-router-dom";
import './profilepage.css';
import Sidebar from "./components/sidebar"

export default function ViewStory(){
    const {id , tot} = useParams();
    const navigate = useNavigate();
    const ID = Number(id),TOT=Number(tot);
    if(ID > TOT || ID <= 0){
        navigate('/')
    }
    const [posts,loading] = useFetch('http://localhost:3000/suggesstions/'+id);

    return (
        <>
        <div>
            <div>
                <Sidebar/>
            </div>
            <div>
                {posts ? (  
                            
                <div className='postPage w-80'>
                    <i class="bi bi-arrow-left-circle-fill" onClick = {()=>{navigate(`/story/${Number(id)-1}/15`)}}></i>
                    <img src={posts.postImage} alt="Post not found" className='postImage'/>                   
                    <i class="bi bi-arrow-right-circle-fill" onClick = {()=>{navigate(`/story/${Number(id)+1}/15`)}}></i>
                </div>

        ) : (
            <p className='w-80'>Loading posts ...</p>
        )}
            </div>
        </div>
        </>     

        
    )
}