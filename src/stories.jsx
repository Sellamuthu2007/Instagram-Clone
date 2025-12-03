import { useState,useEffect } from 'react';
import useFetch from './useFetch';
import './index.css'
import { useNavigate } from 'react-router-dom';


function Stories(){

    const [stories,loading] = useFetch('http://localhost:3000/stories')
    const navigate = useNavigate();
    

    return (
        <>
            <div className = 'stories ' >
                { stories ? (
                    stories.map((story) =>{
                       return (
                         <div className='storybar' key = {story.id}>
                            <img src={story.postImage} alt="Profile not found" className='dp rounded-circle story-border'
                            onClick={()=> navigate(`/story/${story.id}/${15}`)}/>
                            <p>{story.username}</p>
                        </div>
                       )
                    })

                ):(
                    <p>Stories are Loading</p>
                )}
            </div>
        
        </>
    )
}
export default Stories;