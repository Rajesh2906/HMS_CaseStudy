import React,{useState} from 'react';
import axios from 'axios';
import ManagerRoomsNavBar from './ManagerRoomsNavBar';

function MAddRoom() {
    const url="Manager/manager/rooms/addrooms"
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
                alert("Room Added Successfull");
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
        <ManagerRoomsNavBar/>
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

export default MAddRoom
