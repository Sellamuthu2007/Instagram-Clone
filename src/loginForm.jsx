import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

import './App.css'
export default function LoginForm(){

    let [name,setName] = useState("");
    let [username,setUsername] = useState("");
    let [image,setImage] = useState("");
    let [dob,setDOB] = useState("");
    let [email,setEmail] = useState("");
    let [pwd1,setPwd1] = useState("");
    let [pwd2,setPwd2] = useState("");
    let navigate = useNavigate();

    const handleLogin = (e)=>{
        e.preventDefault();
        if(pwd1 != pwd2)return;
        
        // Calculate age from DOB
        const calculateAge = (birthday)=>{
            const today = new Date();
            const birth = new Date(birthday);
            const age = today.getFullYear() - birth.getFullYear();
            const diff = today.getMonth() - birth.getMonth();
            if(diff < 0 || (diff === 0 && today.getDate() < birth.getDate())){
                age--;
            }
            return age;
        }
        
        try{
            axios.post('http://localhost:4000/api/users', {
                name,
                userName: username,
                userProfile: image,
                dob,
                age: calculateAge(dob),
                email,
                password: pwd1,
            });
            navigate('/home');
        }
        catch(err){
            console.log(err.response?.data || err.message);
        }         
    };
    
    return (
        <>
            <form className="loginForm">
                <div className='formElements'style = {{"marginTop" : "30px"}} id='login1'>
                    <div><h5>Name</h5></div>
                    <div><input type="text"
                    value = {name}
                    placeholder = "johndoe"
                    name = "name"
                    onChange={(e)=> setName(e.target.value)}
                    /></div>
                </div>
                <div className='formElements' id='login1'>
                    <div><h5>Username</h5></div>
                    <div><input type="text"
                    value = {username}
                    placeholder = "john_doe01"
                    name = "username"
                    onChange={(e)=> setUsername(e.target.value)}
                    /></div>
                </div>
                <div className='formElements' id='login1'>
                    <div><h5>Image URL</h5></div>
                    <div><input type="url" 
                    value={image}    
                    placeholder = "https://john_doe"               
                    name = "image"
                    onChange={(e)=> setImage(e.target.value)}
                    /></div>
                </div>
                <div className='formElements' id='login1'>
                    <div><h5>DOB</h5></div>
                    <div>
                        <input
                        type="date"
                        value = {dob}
                        
                        max={new Date().toISOString().split("T")[0]}
                        onChange={(e)=> {
                            setDOB(e.target.value)
                            console.log(e)}
                        
                        }
                        />
                    </div>
                </div>
                <div className='formElements' id='login1'>
                    <div><h5>Email ID </h5></div>
                    <div><input type="email"
                    value = {email}
                    name = "email"
                    placeholder='johndeo123@gmail.com'
                    onChange={(e)=> setEmail(e.target.value)}
                    /></div>
                </div>
                <div className='formElements' id='login1'>
                    <div><h5>Password</h5></div>
                    <div><input type="password"
                    name = "pwd1"
                    value = {pwd1}
                    onChange={(e)=> setPwd1(e.target.value)}
                    /></div>
                </div>
                <div className='formElements' id='login1'>
                    <div><h5>Confirm Password </h5></div>
                    <div><input type="password"
                    name = "pwd2"
                    value = {pwd2}
                    onChange={(e)=> setPwd2(e.target.value)}
                    /></div>
                </div>
                {pwd1 != pwd2 && (
                    <p style = {{"color" : "red" , "marginLeft" : "20px"}} id='login1'>Password doesn't match</p>
                )}
                <p style = {{"marginLeft" : "110px","marginTop" : "5px"}} id='login1'>Already have Account? <span style = {{"color" : "blue" ,  "cursor":"pointer"}}
                    onClick = {() => navigate('/signup')}
                >Sign Up</span></p>
                 
                    <button id='login1' style={{                 
                        "marginLeft" : "200px"
                        }}onClick = {(e)=>handleLogin(e)}>Login</button>
                
            </form>
        
        
        </>
    )
}