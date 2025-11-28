import { use } from "react"
import useFetch from "./useFetch"
import { useNavigate, useParams } from "react-router-dom"
import './index.css'
import Sidebar from "./components/sidebar"


export default function ViewStory(){
    

    const {id} = useParams();

    const [profile,loading] = useFetch('http://localhost:3000/suggesstions/'+id);

    return (
               
        <div>
            {profile ? (
            <div>
                <img src={profile.userProfile} alt="Profile not found" className="profilePic"/>
                <div>

                </div>
            </div>

        ):(
                <p>Profile loading...</p>
        )}
        </div>
        
        
    )
}