import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../Context'
import Loading from './Loading'

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms}=context;
    if(loading){
         return <Loading/>
        }
        return (
            <div>
            <RoomsFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>
            </div>
            );
}

export default withRoomConsumer(RoomsContainer)

// Using render props 
// function RoomsContainer() {
//     return(
//         <RoomConsumer>
//      {
//          (value) =>{   
//              const {loding,sortedRooms,rooms}=value
//              if(Loading){
//                  return <Loading/>
//              }
//              return (
//                 <div>
//                     <RoomsFilter rooms={rooms}/>
//                     <RoomList rooms={sortedRooms}/>
//                 </div>
//                  );
//          }
//      }
//         </RoomConsumer>
//     );
// }

// export default RoomsContainer
