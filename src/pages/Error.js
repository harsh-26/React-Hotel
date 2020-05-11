import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <Hero>
            <Banner title='404 Error' subtitle='page not found'>
                <Link to = '/' className='btn-primary'>
                    Back to home page
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error
