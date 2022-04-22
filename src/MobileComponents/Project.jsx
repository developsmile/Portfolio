import React from 'react'
import './Mobile.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from './Card';
const Project = () => {
  return (
    <>
    <div className="project-container" id='project'>
        <h1 className='project-title'>Projects</h1>
        <h2 className='h2'>Web Projects</h2>
        <Carousel className='carousel1' >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Carousel>
        <h2 className="h21">Web Design</h2>
        <Carousel className='carousel2'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Carousel>
    </div>
    </>
  )
}

export default Project