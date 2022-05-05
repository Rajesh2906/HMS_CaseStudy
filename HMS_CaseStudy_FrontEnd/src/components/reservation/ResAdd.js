import React,{useState} from 'react';
import axios from 'axios';
import ResNavBar from './ResNavBar';
import './ResAdd.css'

function ResAdd() {
    const url="Receptionist/Receptionist/reservation/addreservation"
    const[data,setData]=useState({        
        name:"",
        phoneNumber:"",
        emailId:"",
        gender:"",
        address:"",  
        numberOfAdult:"",
        numberOfChildren:"",
        company:"",
        checkIn:"",
        checkOut:"",
        numberOfNights:"",  
         reservationCode_:"",
         status_:""
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
            name:data.name,
            phoneNumber:data.phoneNumber,
            emailId:data.emailId,
            gender:data.gender,
            address:data.address,
            numberOfAdult:data.numberOfAdult,
            numberOfChildren:data.numberOfChildren,
            company:data.company,
            checkIn:data.checkIn,
            checkOut:data.checkOut,
            numberOfNights:data.numberOfNights,
            reservationCode_:data.reservationCode_,
            status_:data.status_
            }
        e.preventDefault();
        axios.post(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Reservation details successfully added");
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
        <ResNavBar/>
        <h1>Reservation Add Form</h1>
        <div  > 
            <form onSubmit={(e)=>submit(e)} className='addform'>
                <label for="name">Name : </label>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text"  /><br/><br/>
                <label for="phoneNumber">phoneNumber : </label>
                <input onChange={(e)=>handle(e)} id="phoneNumber" value={data.phoneNumber} placeholder='phoneNumber' type="text"/><br/><br/>
                <label for="emailId">emailId : </label>
                <input onChange={(e)=>handle(e)} id="emailId" value={data.emailId} placeholder='emailId' type="email"/><br/><br/>
                <label for="gender">Gender : </label>
                <input onChange={(e)=>handle(e)} id="gender" value={data.gender} placeholder='gender' type="text"/><br/><br/>
                <label for="address">Address : </label>
                <input onChange={(e)=>handle(e)} id="address" value={data.address} placeholder='address' type="text"/><br/><br/>
                <label for="numberOfAdult">NumberOfAdult : </label>
                <input onChange={(e)=>handle(e)} id="numberOfAdult" value={data.numberOfAdult} placeholder='numberOfAdult' type="number"/><br/><br/>
                <label for="numberOfChildren">NumberOfChildren : </label>
                <input onChange={(e)=>handle(e)} id="numberOfChildren" value={data.numberOfChildren} placeholder='numberOfChildren' type="number"/><br/><br/>
                <label for="company">Company : </label>
                <input onChange={(e)=>handle(e)} id="company" value={data.company} placeholder='company' type="text"/><br/><br/>
                <label for="checkIn">CheckIn Date : </label>
                <input onChange={(e)=>handle(e)} id="checkIn" value={data.checkIn} placeholder='checkIn' type="text"/><br/><br/>
                <label for="checkOut">CheckOut Date : </label>
                <input onChange={(e)=>handle(e)} id="checkOut" value={data.checkOut} placeholder='checkOut' type="text"/><br/><br/>
                <label for="numberOfNights">NumberOfNights : </label>
                <input onChange={(e)=>handle(e)} id="numberOfNights" value={data.numberOfNights} placeholder='numberOfNights' type="number"/><br/><br/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default ResAdd
