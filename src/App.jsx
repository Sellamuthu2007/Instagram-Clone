import { useState } from 'react'
import Sidebar from './sidebar'
import Feedbar from './feedbar'
import Suggesstions from './suggesstions'
function App() {
    return (
      <div className = "d-flex vh-100">                   
        <div className="w-20" ><Sidebar/></div>
        <div className='w-50 '><Feedbar/></div>
        <div className='w-30'><Suggesstions/></div>
      </div>
    )
  }

export default App
