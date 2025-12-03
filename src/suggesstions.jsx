import { useState , useEffect, } from "react";
import useFetch from "./useFetch";
import './index.css'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



function Suggesstions(){

    
    const navigate = useNavigate();

    const [profile,load1] = useFetch('http://localhost:3000/profile');
    const [suggest,load2] = useFetch('http://localhost:3000/suggesstions');    

    const handleFollow = async(id,username)=>{
        axios.post('http://localhost:3000/followers',{
            "id" : id,
            "username" : username
        })
        .then(()=> alert(`You are following ${username}`))
        .catch((err)=> console.log(err.message))
    }
    return (
       <>
        <div className="suggesstion">
        {profile  ? (
            <div className="d-flex"
            style = {{
                        "marginLeft" : "10px",
                        "marginTop" : "40px"}}>
                <img src={profile.userProfile} alt="Profile image" className="dp rounded-circle" />
                <h5>{profile.username}</h5>
                <p className="side-right"
                style={{
                            "marginRight" : "90px"
                        }}>Switch</p>
            </div>          
            
         )
        :(
            <p>Componenet not found</p>
        )  
    }
    <div className="row-flex">
        <p style={{"marginLeft" : "30px"}}>Suggessted for you</p>
        <p className="side-right"
        
        style={{ "marginRight" : "90px"}}>See all </p>
    </div>
    <div style = {{"overflow-y" : "auto" , "height" : "100vh"}}>
         {suggest ?  (
            suggest.map((sugg)=>{
               return (
                <>
                 <div className="row-flex suggest"
                 style = {{ "marginTop" : "15px"}}
                 key = {sugg.id}
                 >
                    <div className="user-info">
                        <div className="row-flex suggest">
    <div className="user-info"
        onClick={()=> navigate('/profile/'+sugg.id)}>
        <img src={sugg.userProfile} className="dp rounded-circle story-border" 
        style = {{
                "height" : "40px",
                "width" : "40px"
                }}/>
        <h5>{sugg.username}</h5>
    </div>
    </div>
                    </div>
                    <a className="ms-auto text-primary"
                    style={{
                            "marginRight" : "90px",
                            "textDecoration" : "none",
                            "cursor" : "pointer"
                        }}
                    onClick={()=>{handleFollow(sugg.id,sugg.username)}}
                    >Follow</a>
                 </div>
                </>
               )
            })
         ):(
            <p>Suggesstions not found</p>
         )}
    </div>
    </div> 
    </>
        
    )
    

}
export default Suggesstions;