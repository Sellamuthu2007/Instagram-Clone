import  useFetch  from './useFetch.jsx';
import { useParams,useNavigate } from "react-router-dom"
import './profilepage.css'

export default function ViewStory(){

    const {id} = useParams();
    const navigate = useNavigate();

    const [posts,loading] = useFetch('http://localhost:3000/posts/'+id);

    return (
        <>
        <div>
            {posts ? (            
                <div className='postPage'>
                <i class="bi bi-arrow-left-circle-fill"></i>
                <div className='post-bar'>
                    <img src={posts.postImage} alt="Post not found" className='postimage'/>
                    <div className='post-bottom'>                   
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat-left"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <div>

                    </div>
                </div>
                <i class="bi bi-arrow-right-circle-fill"></i>
            </div>

        ) : (
            <p>Loading posts ...</p>
        )}
        </div>
        </>     

        
    )
}