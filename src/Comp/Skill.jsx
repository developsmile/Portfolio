import React from 'react'
import './mob.css'
import LinearProgress from '@mui/material/LinearProgress';
import {Data} from '../Data/Data';
const Skill = () => {
  return (
    <>
        <h2 className='skill-heading' id='skill'>Skills</h2>
        <div className="skill-container" >
            <img className='coding-img' src="assets/coddingimg.jpg" alt="" />
            <div className="right">
                {
                    Data.map((item,index)=>{
                        return(
                        <div className="skill-progres">
                            <p>{item.title}</p>
                            <LinearProgress  variant="determinate" value={item.rate} className="progress-bar"/>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Skill