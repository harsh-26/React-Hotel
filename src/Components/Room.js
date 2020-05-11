import React from 'react'
import {Link} from 'react-router-dom'

function Room({room}) {
    const {name,slug,images,price} =room;
    console.log(room);
    return (
        <article className="room"> 
        <div className="img-container">
            <img src={images[0]} alt="not found"/>
            <div className = "price-top">
                      <h6>${price}</h6>
                      <p>Per Night</p>  
            </div>
            <Link to ={`/rooms/${slug}`} className ='btn-primary room-link'>
                Features
            </Link>
            <p className='room-info'>
                {name}
            </p>
        </div>
        </article>
    )
}

export default Room
