import { useState , useEffect, } from "react";
import useFetch from "./useFetch";
import './index.css'



function Suggesstions(){

    const [profile,load1] = useFetch('http://localhost:3000/profile');
    const [suggest,load2] = useFetch('http://localhost:3000/suggesstions');    

    return (
       <>
        <div className="suggesstion">
        {profile  ? (
            <div className="d-flex">
                <img src={profile.userProfile} alt="Profile image" className="dp rounded-circle" />
                <h5>{profile.username}</h5>
                <small className="side-right">Switch</small>
            </div>          
            
         )
        :(
            <p>Componenet not found</p>
        )  
    }
    <div className="row-flex">
        <p>Suggessted for you</p>
        <strong className="side-right">See all </strong>
    </div>
    <div>
         {suggest ?  (
            suggest.map((sugg)=>{
               return (
                <>
                 <div className="row-flex suggest">
                    <div className="user-info">
                        <div className="row-flex suggest">
    <div className="user-info">
        <img src={sugg.userProfile} className="dp rounded-circle" />
        <h5>{sugg.username}</h5>
    </div>
</div>
                    </div>
                    <p className="text-primary">Follow</p>
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