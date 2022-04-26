import React from 'react'
import './Mobile.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ItemCard from './Card';
const Project = () => {
  return (
    <>
    <div className="project-container" id='project'>
        <h1 className='project-title'>Projects</h1>
        <h2 className='h2'>Web Projects</h2>
        <Carousel className='carousel1' showStatus={false}  showThumbs={false} showArrows={false} interval={2000} showIndicators={false} infiniteLoop autoPlay>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </Carousel>
        <h2 className="h21">Web Design</h2>
        <Carousel className='carousel2' showStatus={false} showIndicators={false} showArrows={false} infiniteLoop autoPlay>
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
        </Carousel>
    </div>
    </>
  )
}

export default Project