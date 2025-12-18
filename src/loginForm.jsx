import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import './App.css'
export default function LoginForm(){

    let [name,setName] = useState("Johndeo");
    let [username,setUsername] = useState("john_doe01");
    let [image,setImage] = useState("https://john_doe");
    let [dob,setDOB] = useState("yyyy-MM-dd");
    let [email,setEmail] = useState("john_doe@gamil.com");
    let [pwd1,setPwd1] = useState("");
    let [pwd2,setPwd2] = useState("");

    return (
        <>
            <form className="loginForm">
                <div className='formElements'style = {{"marginTop" : "30px"}}>
                    <div><h5>Name</h5></div>
                    <div><input type="text"
                    value = {name}
                    name = "name"
                    onChange={(e)=> setName(e.target.value)}
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Username</h5></div>
                    <div><input type="text"
                    value = {username}
                    name = "username"
                    onChange={(e)=> setUsername(e.target.value)}
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Image URL</h5></div>
                    <div><input type="url" 
                    value={image}                   
                    name = "image"
                    onChange={(e)=> setImage(e.target.value)}
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>DOB</h5></div>
                    <div>
                        <input
                        type="date"
                        value = {dob}
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e)=> setDOB(e.target.max)
                        }
                        />
                    </div>
                </div>
                <div className='formElements'>
                    <div><h5>Email ID </h5></div>
                    <div><input type="email"
                    value = {email}
                    name = "email"
                    onChange={(e)=> setEmail(e.target.value)}
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Password</h5></div>
                    <div><input type="password"
                    name = "pwd1"
                    value = {pwd1}
                    onChange={(e)=> setPwd1(e.target.value)}
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Confirm Password </h5></div>
                    <div><input type="password"
                    name = "pwd2"
                    value = {pwd2}
                    onChange={(e)=> setPwd2(e.target.value)}
                    /></div>
                </div>
                <div className="formElements"style={{
                    "marginTop":"30px",
                    "marginLeft" : "200px"
                }} >
                    <button>Login</button>
                </div>
            </form>
        
        
        </>
    )
}