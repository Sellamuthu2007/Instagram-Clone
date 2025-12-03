import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
export default function ChangeProfile(){

    const [profile,setProfile] = useState();

    const [unfollow,setUnfollowed] = useState(true);
    const [followers,loading] = useFetch('http://localhost:3000/followers');

    useEffect(()=>{
        axios.get('http://localhost:3000/profile')
        .then((data) => {
            setProfile(data.data)
            console.log(data.data)
        })
        .catch((err) => console.log(err.message))
    },[unfollow])

    function handleOnChange(e){
        setProfile((prev)=>({
            ...prev,
            [e.target.name] : e.target.value

        }))
    }

    const handleUpdate = async()=>{
        axios.put(`http://localhost:3000/profile`,profile)
        .then(()=>{alert('Updated')})
        .catch(err => console.log(err))
    }

    const handleUnfollow = async(id,username)=>{
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(()=> {
            setUnfollowed(!unfollow)
            alert(`Unfollowed ${username}`)
            })
        .catch((err) => console.log(err.message))
    }
    

    return (
        <>
            <div className="w-5">
                {profile ? (
                <div>
                    <div style = {{"padding" : "50px"}}>
                    <h5>{profile.username}</h5>
                    <img src={profile.userProfile} className="profile rounded-circle story-border"/>
                    <div>
                        <input  type="text" 
                            value = {profile.username}
                            name = "username"
                            className="form-control my-4"
                            onChange={handleOnChange}
                            style = {{width : "500px"}}
                        />
                        <input type="text"
                           value = {profile.userProfile} 
                           name = "userProfile"
                           className="form-control my-4"
                           onChange={handleOnChange}
                           style = {{width : "500px"}}
                        />

                        <button 
                        className="btn btn-primary"
                        onClick={handleUpdate}
                        >Update</button>
                    </div>
                </div>
                <div  style = {{"padding" : "50px"}}>
                    <b>Followings</b>
                    {followers ? (
                        followers.map((members) => (
                            <div className="d-flex my-2">
                                <p>{members.username}</p>
                                <button className="btn btn-secondary ms-auto"
                                onClick = {()=> handleUnfollow(members.id,members.username)}>Unfollow</button>
                            </div>
                        ))
                    ):(
                        <p>No Followers yet...</p>
                    )}

                </div>
                </div>
                
            ):(
                <p>Loading Profile ...</p>
            )
            
            }
            </div>
            
        </>
    )
}