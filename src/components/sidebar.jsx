import { useNavigate } from "react-router-dom";

function Sidebar(){

    const navigate = useNavigate();

    return (
        <>
             <div className='side-left'>
                <div className='sidebar'>
                <i className="bi bi-instagram" id="side-logo"></i>
                <div onClick={()=> navigate('/')}><i className="bi bi-house" id="side-logo"
                ></i><span>Home</span></div>
                <div><i className="bi bi-camera-reels" id="side-logo"></i><span>Reels</span></div>
                <div><i className="bi bi-send" id="side-logo"></i><span>Messages</span></div>
                <div><i className="bi bi-search" id="side-logo"></i><span>Search</span></div>
                <div><i className="bi bi-compass" id="side-logo"></i><span>Explore</span></div>
                <div><i className="bi bi-bell" id="side-logo"></i><span>Notifications</span></div>
                <div><i className="bi bi-plus" id="side-logo"></i><span>Create</span></div>
                <div><i className="bi bi-person" id="side-logo"></i><span>Profile</span></div>
            </div>
            <div className='sidebar'>
                <div><i className="bi bi-three-dots" id="side-logo"></i><span>More</span></div>
                <div><i className="bi bi-meta" id="side-logo"></i><span>Also from Meta</span></div>
            </div>
             </div>
        </>
    )
}
export default Sidebar;