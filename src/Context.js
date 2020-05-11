import React, { Component } from 'react'
import items from './data'

const RoomContext = React.createContext();


class RoomProvider extends Component {
    state={
        rooms :[],
        sortedRooms : [],
        featuredRooms : [],
        loading : true,
        type :'all',
        capacity : 1,
        price : 0,
        minPrice : 0,
        maxPrice : 0,
        minSize : 0,
        maxSize : 0,
        breakfast : false,
        pets : false 

    };
    componentDidMount(){
        let rooms = this.formatData(items);
      
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item=>item.size));

        this.setState(
            {rooms,
            featuredRooms,
            sortedRooms:rooms,
            loading:false,
            price:maxPrice,
            maxSize,
            maxPrice
            }
        )
      
    }

    formatData(items){
        
        let tempItem = items.map(item =>{
            let id =item.sys.id;
            
            let images = item.fields.images.map(image => image.fields.file.url)
            let room ={...item.fields,images,id}
            return room

        })
       return tempItem;
    }
    //Get specific room that has slug that is passed
    getRoom = (slug)=>{
        let tempRoom = [...this.state.rooms]
        const room = tempRoom.find((room)=>room.slug===slug);
        return room; 
    }
    
    handleChange = event =>{
        const target = event.target;
        const value = target.type ==="checkbox" ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        },this.filterRooms)
    
     //   console.log(`this is type : ${type},this is name : ${name},this is value ${value}`)
    }

    filterRooms = ()=>{
        let{
            rooms,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
        }=this.state;

        let tempRoom = [...rooms];
        capacity = parseInt(capacity)
        price =parseInt(price)


        if(type != 'all'){
            tempRoom = tempRoom.filter(room => room.type === type)
        }

        if(capacity!==1){
            tempRoom = tempRoom.filter(room => room.capacity >= capacity)
        }
        tempRoom=tempRoom.filter(room=>room.price<=price)
        tempRoom=tempRoom.filter(room=>room.size>=minSize && room.size<=maxSize )

        if(breakfast){
            tempRoom=tempRoom.filter(room=>room.breakfast===true)
        }
        if(pets){
            tempRoom=tempRoom.filter(room=>room.pets===true)
        }

        this.setState({
            sortedRooms : tempRoom
        })
    };

    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange: this.handleChange}}>
              {this.props.children}
            </RoomContext.Provider>
                
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

 
export {RoomProvider,RoomConsumer,RoomContext};
