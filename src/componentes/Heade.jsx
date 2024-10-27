import React from 'react'
import { Link } from 'react-router-dom'
import './Heade.css'
function Heade() {
  return (
    <div className='navbar'>
        <h2>
            <Link to={'/'}>Blog</Link></h2>
           <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/new'} className='new-btn'>NewPost</Link>
            </li>
           </ul>

    </div>
  )
}

export default Heade