import React from 'react'
import './mob.css'
const Card2 = ({img ,project_name,project_link}) => {
  return (
    <>
        <div className='card'>
            <img src="assets/bgintro.jpg" alt="" />
            <div className="card-desc">
              <h1 className='project-name'>{project_name}</h1>
              <a className='demo' href={project_link}> Demo</a>
            </div>
        </div>
    </>
  )
}

export default Card2;