import React from 'react'
import './mob.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ItemCard from './Card';
import { WebDesign, WebProject } from '../Data/Data';
import Card2 from './Card2';

const Project = () => {
  return (
    <>
    <div className="project-container" id='project'>
        <h1 className='project-title'>Projects</h1>
        <div className="web-project">
          <h2 className='h21'>Web Projects</h2>
          <Carousel className='carousel1' showStatus={false}  showThumbs={false}  showIndicators={false} infiniteLoop={true}>
              {
                WebProject.map(item => <ItemCard video={item.video} project_name={item.project_name} project_link={item.project_link}/>)
              }
          </Carousel>
        </div>
        <div className="web-design">
          <h2 className="h21">Web Design</h2>
          <Carousel className='carousel2' showStatus={false} showIndicators={false} showThumbs={false}  >
            {
              WebDesign.map(item => <ItemCard video={item.video} project_name={item.project_name} project_link={item.project_link}/>)
            }
          </Carousel>
        </div>
       
    </div>
    </>
  )
}

export default Project