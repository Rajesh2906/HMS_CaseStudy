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
    <div className='backimage'>
        <div  class="reservesearchbar">
            <form onSubmit={(i)=>guestsubmit(i)}> 
                <input className='idsearch' onChange={(i)=>guesthandle(i)} id="guestCode_" value={guest.guestCode_} placeholder='Guest Code' type="text"/>
                <button  className='idsearchbutton'>Search</button>
            </form>
        </div>
        <div className='updatebody'>  
            <div className="container">
            <div className="title">New Guest</div>
            <div  className='content'> 
            <div> 
            <form onSubmit={(e)=>submit(e)}>
                <div className="user-details">  
                    <div className="input-box"><input value={data.guestCode_} placeholder='Guest Code' type="text" readOnly/></div>
                    <div className="input-box"><input value={data.name_} placeholder='name' type="text" readOnly/></div>
                    <div className="input-box"><input value={data.phoneNumber_} placeholder='phoneNumber' type="text" readOnly/></div>
                    <div className="input-box"><input value={data.emailId_} placeholder='emailId' type="email" readOnly/></div>
                    <div className="input-box"><input value={data.gender_} placeholder='gender' type="text" readOnly/></div>
                    <div className="input-box"><input value={data.address_} placeholder='address' type="text" readOnly/></div>
                    <div className="input-box"><input value={data.numberOfAdult} placeholder='numberOfAdult' type="number" readOnly/></div>
                    <div className="input-box"><input value={data.numberOfChildren} placeholder='numberOfChildren' type="number" readOnly/></div>
                    <div className="input-box"><input value={data.company_} placeholder='company' type="text" readOnly/></div>
                    <div className="input-box"><input value={data.checkIn} placeholder='checkIn' type="date" readOnly/></div>
                    <div className="input-box"><input value={data.checkOut} placeholder='checkOut' type="date" readOnly/></div>
                    <div className="input-box"><input value={data.numberOfNights} placeholder='numberOfNights' type="number" readOnly/></div>
                    <div className="input-box"><input value={data.roomNumber} placeholder='RoomNo' type="text" readOnly/></div>
                </div>
                <div className="resclick">
                        <input type="submit" value="Delete"/>
                </div>   
            </form>
            </div>
            </div>
            </div>
            </div>
    </div>
</React.Fragment>
)
}

export default RGuestDelete