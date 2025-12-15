import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Notfound from './notfound.jsx';
import ViewProfile from './viewProfile.jsx';
import ViewStory from './viewstory.jsx';
import ChangeProfile from './changeProfile.jsx';
import LoginForm from './loginForm.jsx';


const paths = createBrowserRouter([
  {
    path : '/',
    element : <LoginForm/>,
    errorElement : <Notfound/>
  }
  ,
  {
    path : '/home',
    element : <App/>,
  }
  ,
  {
    path : '/profile/:id',
    element : <ViewProfile/>
  },
  {
    path : '/story/:id/:tot',
    element : <ViewStory/>
  },
  {
    path : '/myprofile',
    element : <ChangeProfile/>
  },
  
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router = {paths} />
  
)
