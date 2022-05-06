import React from 'react'
import RecepGusNavBar from './RecepGuestNavBar';
import { useState } from 'react';
import axios from 'axios';

function RGuestCheckout() {
  const[data,setData]=useState({        
    guestCode_:"",    
})
axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    return config;
    },
    error => {
    return Promise.reject(error);
    });
    const url="Receptionist/receptionist/guest/checkoutguest?guestCode=" + data.guestCode_;

function submit(e){
    const item={
        guestCode_:data.guestCode_
        }
    e.preventDefault();
    axios.put(url,item )
        .then(res=>{
            console.log(res.data);
            alert("Guest Checked Out successfully");
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
    <RecepGusNavBar/>
    <h1>Reservation Add Form</h1>
    <div> 
        <form onSubmit={(e)=>submit(e)}> 
            <input onChange={(e)=>handle(e)} id="guestCode_" value={data.guestCode_} placeholder='Reservation Code' type="text"/>
            <button>submit</button>
        </form>
    </div>
</React.Fragment>
)
}

export default RGuestCheckout
