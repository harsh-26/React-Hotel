import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../Components/RoomsContainer'
import RoomsContainer from '../Components/RoomsContainer'

function Rooms() {
    return (
        <>
        <Hero hero="roomsHero" >
            <Banner title="Our Rooms">
                <Link to='/' className = "btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <RoomsContainer />
        </>
        )
}

export default Rooms
