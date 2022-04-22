import React from 'react'
import './Mobile.css'
const ItemCard = () => {
  return (
    <>
        <div className='card'>
            <img src="assets/coddingimg.jpg" alt=""/>
            <div className="card-desc">
              <h1> Resume Builder</h1>
              <a className='demo' href="/"> Demo</a>
            </div>
        </div>
    </>
  )
}

export default ItemCard;