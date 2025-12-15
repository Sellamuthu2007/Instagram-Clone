import './App.css'
export default function LoginForm(){
    return (
        <>
            <form className="loginForm">
                <div className='formElements'style = {{"marginTop" : "30px"}}>
                    <div><h5>Name</h5></div>
                    <div><input type="text"
                    value = "Johndeo"
                    name = "name"
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Username</h5></div>
                    <div><input type="text"
                    value = "john_doe"
                    name = "username"
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Image URL</h5></div>
                    <div><input type="url"                    
                    name = "image"
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>DOB</h5></div>
                    <div>
                        <input
                        type="date"
                        value = "dd-mm-yy"
                        max={new Date().toISOString().split("T")[0]}
                        />
                    </div>
                </div>
                <div className='formElements'>
                    <div><h5>Email ID </h5></div>
                    <div><input type="email"
                    value = "john_doe@gamil.com"
                    name = "email"
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Password</h5></div>
                    <div><input type="password"
                    name = "pwd1"
                    /></div>
                </div>
                <div className='formElements'>
                    <div><h5>Confirm Password </h5></div>
                    <div><input type="password"
                    name = "pwd2"
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