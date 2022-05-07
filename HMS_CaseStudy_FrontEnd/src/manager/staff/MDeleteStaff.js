import React from 'react'
import ManagerStaffNavBar from './ManagerStaffNavBar';
import { useState } from 'react';
import axios from 'axios';

function RGuestDelete() {
    
const[staff,setStaff]=useState({        
    staffCode:"",    
})
const[data,setData]=useState({
    staffCode:"",
    departmentId:"",
    employeeName:"",
    phoneNo:"",
    email:"",
    age:"",
    employeeAddress:"",
    salary:""
})
axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    return config;
    },
    error => {
    return Promise.reject(error);
    });
    
const url="Manager/deletestaff?staffCode=" + staff.staffCode;

function submit(e){
    e.preventDefault();
    axios.delete(url)
        .then(res=>{
            window.location.reload();
        },
       );
    
}
const idurl="Manager/getstaffbyid?staffCode="+staff.staffCode;
function staffsubmit(i){
    i.preventDefault(); 
    axios.get(idurl)
        .then(res=>{
            setData(res.data);
        },
       );
    
}

function staffhandle(i){
    const newdata={...staff}
    newdata[i.target.id]=i.target.value
    setStaff(newdata)
}
return (
<React.Fragment> 
    <ManagerStaffNavBar/>
    <h1>Enter Staff Code</h1>
        <div> 
            <form onSubmit={(i)=>staffsubmit(i)}> 
                <input onChange={(i)=>staffhandle(i)} id="staffCode" value={staff.staffCode} placeholder='Staff Code' type="text"/>
                <button>search</button>
            </form>
        </div>
        <h1>Staff Removed</h1>
        <div> 
            <form> 
                <input  value={data.staffCode} placeholder='Staff Code'/>
                <input  value={data.departmentId} placeholder='Department Id'/>
                <input  value={data.employeeName} placeholder='Name'/>
                <input  value={data.phoneNo} placeholder='Phone Number'/>
                <input  value={data.email} placeholder='email'/>
                <input  value={data.age} placeholder='age'/>
                <input  value={data.employeeAddress} placeholder='Address'/>
                <input  value={data.salary} placeholder='Salary'/>
                <button onClick={(e)=>submit(e)}>Delete</button>
            </form>
        </div>
</React.Fragment>
)
}

export default RGuestDelete
