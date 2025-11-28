import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Notfound from './notfound.jsx';
import ViewStory from './viewstory.jsx';


const paths = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    errorElement : <Notfound/>
  }
  ,
  {
    path : '/story/:id',
    element : <ViewStory/>
  }
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router = {paths} />
  
)
