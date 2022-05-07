import React from 'react'
import OwnerGuestNavBar from './OwnerGuestNavBar';
import { useState } from 'react';
import axios from 'axios';

function OGuestDelete() {
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
    const url="Owner/owner/guest/deleteguest?guestCode=" + guest.guestCode_;

function submit(e){
    e.preventDefault();
    axios.delete(url)
        .then(res=>{
            window.location.reload();
        },
       );
    
}
const idurl="Owner/owner/guest/getguestbyid?guestCode="+guest.guestCode_;
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
    <OwnerGuestNavBar/>
    <h1>Enter Guest Id</h1>
        <div> 
            <form onSubmit={(i)=>guestsubmit(i)}> 
                <input onChange={(i)=>guesthandle(i)} id="guestCode_" value={guest.guestCode_} placeholder='Guest Code' type="text"/>
                <button>submit</button>
            </form>
        </div>
        <h1>Remove Guest</h1>
        <div> 
            <form> 
                <input  value={data.guestCode_}  placeholder='Guest Code' type="text" readOnly/>
                <input  value={data.name_} placeholder='name' type="text" readOnly/>
                <input  value={data.phoneNumber_} placeholder='phoneNumber' type="text" readOnly/>
                <input  value={data.emailId_} placeholder='emailId' type="email" readOnly/>
                <input  value={data.gender_} placeholder='gender' type="text" readOnly/>
                <input  value={data.address_} placeholder='address' type="text" readOnly/>
                <input  value={data.numberOfAdult} placeholder='numberOfAdult' type="number" readOnly/>
                <input  value={data.numberOfChildren} placeholder='numberOfChildren' type="number" readOnly/>
                <input  value={data.company_} placeholder='company' type="text" readOnly/>
                <input  value={data.checkIn} placeholder='checkIn' type="text" readOnly/>
                <input  value={data.checkOut} placeholder='checkOut' type="text" readOnly/>
                <input  value={data.numberOfNights} placeholder='numberOfNights' type="number" readOnly/>
                <input  value={data.roomNumber} placeholder='RoomNo' type="text" readOnly/>
                <button onClick={(e)=>submit(e)}>submit</button>
            </form>
        </div>
</React.Fragment>
)
}

export default OGuestDelete
