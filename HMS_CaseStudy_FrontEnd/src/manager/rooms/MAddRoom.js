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
        <div className='body'> 
        <div class="container">
        <div class="title">Add Rooms</div>
        <br/>
        <div> 
            <form onSubmit={(e)=>submit(e)}>
            <div class="user-details">
            <div class="input-box" >
                <input onChange={(e)=>handle(e)} id="roomNumber" value={data.roomNumber} placeholder='Room Number' type="text"/>
            </div>
            </div>    
            <div className="resclick">
             <input type="submit" value="Add"/>
            </div>
            </form>
        </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default MAddRoom