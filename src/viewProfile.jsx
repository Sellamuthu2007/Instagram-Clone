import { use } from "react"
import useFetch from "./useFetch"
import { useNavigate, useParams } from "react-router-dom"
import './index.css'
import Sidebar from "./components/sidebar"
import './profilepage.css'


export default function ViewProfile(){
    

    const {id} = useParams();

    const [profile,loading] = useFetch('http://localhost:3000/suggesstions/'+id);

    return (
        <>
        <div>
            <div className="w-20">
            <Sidebar/>
        </div>
        <div className="w-60">
            {profile ? (
                <div className="profilePage">
                    <div>
                    <img className="profilePic dp-rounded" src={profile.userProfile} alt="Profile not found"
                    style={{"marginTop" : "30px" , "widt" : "50p"}}/>
                </div>
                 <div className="profileDetails">
                    <div className="top">
                    <div><h4>{profile.username}  <i class="bi bi-patch-check-fill" 
                    style = {{"color" : "blue"}}></i></h4></div>
                    <div><button className="btn btn-primary"
                     style = {{"backgroundColor" : "blue"}}>Follow</button></div>
                    <div><button className="btn btn-secondary">Message</button></div>
                    <div><h3><i class="bi bi-person-fill-add"></i></h3></div>
                    <div ><h5><i className="bi bi-three-dots" id="side-logo"></i></h5></div>
                </div>
                <div className="middle">
                    <div><p>{profile.postCount} posts</p></div>
                    <div><p>{profile.followersCount} followers</p></div>
                    <div><p>{profile.followingCount} following</p></div>
                </div>
                <div className="bottom">
                    <b>{profile.fullName}</b>
                    <b style = {{"marginTop" : "20px"}}>{profile.profession}</b>
                    <p style = {{"marginTop" : "20px" , "fontSize" : "20px"}}>{profile.bio}</p>
                   
                </div>
                 </div>
                </div>
            

        ):(
                <p>Profile loading...</p>
        )}
        </div>
        </div>
        <div className="w-20">
            <p>Suggestion tab</p>
        </div>
        </>
        
        
    )
}