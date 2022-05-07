import React,{useState} from 'react';
import axios from 'axios';
import OwnerRoomsNavBar from './OwnerRoomsNavBar';

function OAddRoom() {
    const url="Owner/owner/rooms/addrooms"
    const[data,setData]=useState({       
        roomNumber:"",
        roomStatus_:"",
        totalRooms_:""

    })
    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });
    function submit(e){
        const item={
            roomNumber:data.roomNumber,
            roomStatus_:data.roomStatus_,
            totalRooms_:data.totalRooms_,
            }
        e.preventDefault();
        axios.post(url,item )
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
        <h1>Add Rooms</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="roomNumber" value={data.roomNumber} placeholder='Room Number' type="text"/>
                <button>Add</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default OAddRoom
