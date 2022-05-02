import React from 'react'
import './mob.css'
const ItemCard = ({video ,project_name,project_link}) => {
  return (
    <>
        <div className='card'>
          <video autoPlay loop>
            <source src={video} type="video/mp4" /> 
          </video>
            <div className="card-desc">
              <h1 className='project-name'>{project_name}</h1>
              <a className='demo' href={project_link}> Demo</a>
            </div>
        </div>
    </>
  )
}

export default ItemCard;