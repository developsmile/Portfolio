import React from 'react'
import './mob.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ItemCard from './Card';
const Project = () => {
  return (
    <>
    <div className="project-container" id='project'>
        <h1 className='project-title'>Projects</h1>
        <div className="web-project">
          <h2 className='h21'>Web Projects</h2>
          <Carousel className='carousel1' showStatus={false}  showThumbs={false} showArrows={false} showIndicators={false}>
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
          </Carousel>
        </div>
        <div className="web-design">
          <h2 className="h21">Web Design</h2>
          <Carousel className='carousel2' showStatus={false} showIndicators={false} showThumbs={false} showArrows={false} >
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
          </Carousel>
        </div>
       
    </div>
    </>
  )
}

export default Project