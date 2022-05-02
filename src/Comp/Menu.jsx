import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './mob.css'
const Menu = ({menu, setMenu}) => {
  return (
    <>
        <div className={`menu-container ${menu ? "":"slide-menu"}`}>
            <div className="close" onClick={()=>setMenu(!menu)}>
                <CloseIcon />
            </div>
            <ul>
                <li onClick={()=>setMenu(!menu)}> <a href="#intro">Home</a> </li>
                <li onClick={()=>setMenu(!menu)}> <a href="#skill">Skills</a> </li>
                <li onClick={()=>setMenu(!menu)}> <a href="#project">Projects</a> </li>
                <li onClick={()=>setMenu(!menu)}> <a href="#contact">Contact us</a> </li>
            </ul>
        </div>
    </>
  )
}

export default Menu