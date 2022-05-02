import React from 'react'
import './mob.css'
export const Nav = ({menu,setMenu}) => {
  return (
    <div className="nav">
        <ul>
            <li onClick={()=>setMenu(!menu)}> <a href="#intro">Home</a> </li>
            <li onClick={()=>setMenu(!menu)}> <a href="#skill">Skills</a> </li>
            <li onClick={()=>setMenu(!menu)}> <a href="#project">Projects</a> </li>
            <li onClick={()=>setMenu(!menu)}> <a href="#contact">Contact us</a> </li>
        </ul>
    </div>
  )
}
