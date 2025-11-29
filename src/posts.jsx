import React,{useState,useEffect} from "react";
import useFetch from "./useFetch";


function Posts (){

    const [posts,loading] = useFetch('http://localhost:3000/posts')

    return (             
            <div className="d-flex justify-content-center">
                {posts ? (
                    <div style = {{
                                    "overflow-y" : "auto",
                                    "height" : "100vh"
                                }}>
                        {posts.map((post)=>{
                            return (
                                <div key = {post.id} className="y-3">
                                <div style = {
                                    {
                                        "display" : "flex"                                        
                                    }
                                }>
                                    <img src={post.userProfile} className="dp rounded-circle" alt="Profile image"/>
                                    <h5 style = {{marginLeft : "10px"}}>{post.username}</h5>        
                                </div>
                                    <img  src={post.postImage} alt="Post image" 
                                    style = {
                                        {
                                            marginTop : "10px",
                                            height : "300px",
                                            width : "400px"
                                        }
                                    }/>
                                <div className="post">
                                    <i className="bi bi-heart"></i>
                                    <i className="bi bi-chat-left"></i>
                                    <i className="bi bi-send"></i>
                                </div>
                                <div>
                                    <b>{post.likes} Likes</b>
                                    <p>{post.caption}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>                    
                ):(
                    <div>
                        Loading posts
                    </div>
                )}
            </div>          
        
        
    )
}

export default Posts;