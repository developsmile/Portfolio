import React from 'react'
import './Mobile.css'
import LinearProgress from '@mui/material/LinearProgress';
import Data from '../data/Skill';
const Skill = () => {
  return (
    <>
        <div className="skill-container" id='skill'>
            <img className='coding-img' src="assets/coddingimg.jpg" alt="" />
            <div className="right">
                <h2>Skills</h2>
                {
                    Data.map((item,index)=>{
                        return(
                        <div className="skill-progres">
                            <p>Title</p>
                            <LinearProgress  variant="determinate" value={34} className="progress-bar"/>
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