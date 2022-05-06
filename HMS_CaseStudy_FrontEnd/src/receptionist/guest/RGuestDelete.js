import React from 'react'
import RecepGuestNavBar from './RecepGuestNavBar';
import { useState } from 'react';
import axios from 'axios';

function RGuestDelete() {
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
    const url="Receptionist/receptionist/guest/deleteguest?guestCode=" + data.guestCode_;

function submit(e){
    const item={
        guestCode_:data.guestCode_
        }
    e.preventDefault();
    axios.delete(url,item )
        .then(res=>{
            console.log(res.data);
            alert("Guest Deleted successfully");
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
    <RecepGuestNavBar/>
    <h1>Remove Guest Details</h1>
    <div> 
        <form onSubmit={(e)=>submit(e)}> 
            <input onChange={(e)=>handle(e)} id="guestCode_" value={data.guestCode_} placeholder='Guest Code' type="text"/>
            <button>submit</button>
        </form>
    </div>
</React.Fragment>
)
}

export default RGuestDelete
