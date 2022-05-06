import React from 'react'
import RecepGuestNavBar from './RecepGuestNavBar';
import { useState } from 'react';
import axios from 'axios';

function RGuestDelete() {
  const[deletedata,setDeleteData]=useState({        
    guestCode_:"",    
})
const[guest,setGuest]=useState({        
    guestCode_:"",    
})
const[data,setData]=useState({        
    todayDate_:"",
    reservationCode:"",
    name_:"",
    phoneNumber_:"",
    emailId_:"",
    gender_:"",
    address_:"",
    company_:"",        
    guestCode_:"",    
    roomNumber:"",
    numberOfAdult:"",  
    numberOfChildren:"",
    checkIn:"",
    checkOut:"",
    numberOfNights:"",
    guestStatus_:""
})
axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    return config;
    },
    error => {
    return Promise.reject(error);
    });
    const url="Receptionist/receptionist/guest/deleteguest?guestCode=" + guest.guestCode_;

function submit(e){
    e.preventDefault();
    axios.delete(url)
        .then(res=>{
            window.location.reload();
        },
       );
    
}
const idurl="Receptionist/receptionist/guest/getguestbyid?guestCode="+guest.guestCode_;
function guestsubmit(i){
    i.preventDefault(); 
    axios.get(idurl)
        .then(res=>{
            setData(res.data);
        },
       );
    
}

function guesthandle(i){
    const newdata={...guest}
    newdata[i.target.id]=i.target.value
    setGuest(newdata)
}

function handle(e){
    const newdata={...deletedata}
    newdata[e.target.id]=e.target.value
    setDeleteData(newdata)
}
return (
<React.Fragment> 
    <RecepGuestNavBar/>
    <h1>Enter Guest Id</h1>
        <div> 
            <form onSubmit={(i)=>guestsubmit(i)}> 
                <input onChange={(i)=>guesthandle(i)} id="guestCode_" value={guest.guestCode_} placeholder='Guest Code' type="text"/>
                <button>submit</button>
            </form>
        </div>
        <h1>Reservation update Form</h1>
        <div> 
            <form> 
                <input  value={data.guestCode_} placeholder='Guest Code' type="text"/>
                <input  value={data.name_} placeholder='name' type="text"/>
                <input  value={data.phoneNumber_} placeholder='phoneNumber' type="text"/>
                <input  value={data.emailId_} placeholder='emailId' type="email"/>
                <input  value={data.gender_} placeholder='gender' type="text"/>
                <input  value={data.address_} placeholder='address' type="text"/>
                <input  value={data.numberOfAdult} placeholder='numberOfAdult' type="number"/>
                <input  value={data.numberOfChildren} placeholder='numberOfChildren' type="number"/>
                <input  value={data.company_} placeholder='company' type="text"/>
                <input  value={data.checkIn} placeholder='checkIn' type="text"/>
                <input  value={data.checkOut} placeholder='checkOut' type="text"/>
                <input  value={data.numberOfNights} placeholder='numberOfNights' type="number"/>
                <input  value={data.roomNumber} placeholder='RoomNo' type="text"/>
                <button onClick={(e)=>submit(e)}>submit</button>
            </form>
        </div>
</React.Fragment>
)
}

export default RGuestDelete
