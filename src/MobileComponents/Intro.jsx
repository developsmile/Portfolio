import React from 'react'
import './Mobile.css'
import MenuIcon from '@mui/icons-material/Menu';
const Intro = ({menu,setMenu}) => {
  return (
    <>
        <div className="intro-container" id='home'>
            <nav>
              <ul>
                  <li onClick={()=>setMenu(!menu)}> <a href="#intro">Home</a> </li>
                  <li onClick={()=>setMenu(!menu)}> <a href="#skill">Skills</a> </li>
                  <li onClick={()=>setMenu(!menu)}> <a href="#project">Projects</a> </li>
                  <li onClick={()=>setMenu(!menu)}> <a href="#contact">Contact us</a> </li>
              </ul>
            </nav>
            <div className="bg-img"></div>
            <div className="menu-button" onClick={()=>setMenu(!menu)}>
              <MenuIcon className='menu-icon'  />
            </div>
            <p className='p1'>Hi , There , I ‘m</p>
            <h1>Kanhaiya</h1>
            <p className='p2'>Web Developer</p>
            <img className='user-img' src="assets/img.jpg" alt="" />
            <div className="desc">
                <p>I am Kanhaiya Lal from Sirsa , Ellenabad , Hrayana. final year student at UIET , MDU ,Rohtak ,Haryana.Currently , pursing my B.Tech degree in Computer Science Engineering.</p>
            </div>
        </div>
    
    </>
  )
}

export default Intro