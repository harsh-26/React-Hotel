import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from './Title'


const getUnique = (items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
};

function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const{handleChange,type,capacity,price,maxPrice,minPrice,minSize,maxSize,breakfast,pets} = context;
    
    let types = getUnique(rooms,'type')
    types = ['all',...types]
    console.log(types)

    types = types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    let people = getUnique(rooms,'capacity')
    people = people.map((item,index)=>{
    return <option key={index} value={item}>{item}</option>
    })


    return (
        <section className="filter-container">
            <Title title ="Search Rooms"></Title>
            <form className= "filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                </div>
                {/*Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>
                </div>

                 {/*Room price */}
                 <div className="form-group">
                     <label htmlFor="price">room price ${price}</label>
                     <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price}
                     onChange={handleChange} className="form-control"/>
                 </div>

                {/*Room price */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize}
                        onChange={handleChange} className="size-input"></input>
                        <input type="number" name="maxSize" id="size" value={maxSize}
                        onChange={handleChange} className="size-input"></input>
                    </div>
                </div>
            
                {/*extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" 
                        onChange={handleChange} checked={breakfast}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div> 
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" 
                        onChange={handleChange} checked={pets}/>
                        <label htmlFor="pets">pets</label>
                    </div> 
                </div>

            </form>
        </section>
    )
}

export default RoomsFilter
