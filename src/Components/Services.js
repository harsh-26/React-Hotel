import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info:"This is available for free all included in the room package"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:"What could be better than chilling and relaxing in an excellent hiking hotel after a day’s hiking"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Free Shuttle services offered to guests for pickup and drop at airport"
            },
            {
                icon:<FaBeer/>,
                title:"Free Beer",
                info:"Beer is available for free in bar/lounge in happy hours"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            
            </section>
        )
    }
}

export default Services
