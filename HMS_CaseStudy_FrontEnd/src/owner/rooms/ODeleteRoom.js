import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import OwnerRoomsNavBar from './OwnerRoomsNavBar';

function ODeleteRoom() {
  const[data,setData]=useState({        
    roomNumber:"",    
})
axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    return config;
    },
    error => {
    return Promise.reject(error);
    });
const url="Owner/owner/rooms/deleteRooms?roomCode="+data.roomNumber;

function submit(e){
    const item={
        roomNumber:data.roomNumber
        }
    e.preventDefault();
    axios.delete(url,item)
        .then(res=>{
            console.log(res.data);
            window.location.reload();
        },
       );
    
}

function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
}
return (
<React.Fragment> 
    <OwnerRoomsNavBar/>
    <h1>Delete Room details</h1>
    <div> 
        <form onSubmit={(e)=>submit(e)}> 
            <input onChange={(e)=>handle(e)} id="roomNumber" value={data.roomNumber} placeholder='Room Number' type="text"/>
            <button>submit</button>
        </form>
    </div>
</React.Fragment>
)
}

export default ODeleteRoom;
