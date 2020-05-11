import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRoom from '../Components/FeaturedRoom'

function Home() {
    return (
        <React.Fragment>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms starting at 299$">
            <Link to='/rooms' className = "btn-primary">
                Our Rooms
            </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRoom/>
        </React.Fragment>
    )
}

export default Home
