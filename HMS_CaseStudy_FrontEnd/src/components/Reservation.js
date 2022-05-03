import React,{useState} from 'react';
import axios, {Axios} from 'axios';

function Reservation() {
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
         status_:"",
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
            numberOfNights:data.numberOfNights,
            reservationCode_:data.reservationCode_,
            status_:data.status_
            }
        e.preventDefault();
        const res = axios.post(url,item )
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
        console.log(newdata)
    }
  return (
    <React.Fragment>
        <h1>Reservation Form</h1>
        <div>
            <h2>Dance</h2>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text"/>
                <input onChange={(e)=>handle(e)} id="phoneNumber" value={data.phoneNumber} placeholder='phoneNumber' type="text"/>
                <input onChange={(e)=>handle(e)} id="emailId" value={data.emailId} placeholder='emailId' type="email"/>
                <input onChange={(e)=>handle(e)} id="gender" value={data.gender} placeholder='gender' type="text"/>
                <input onChange={(e)=>handle(e)} id="address" value={data.address} placeholder='address' type="text"/>
                <input onChange={(e)=>handle(e)} id="numberOfAdult" value={data.numberOfAdult} placeholder='numberOfAdult' type="number"/>
                <input onChange={(e)=>handle(e)} id="numberOfChildren" value={data.numberOfChildren} placeholder='numberOfChildren' type="number"/>
                <input onChange={(e)=>handle(e)} id="company" value={data.company} placeholder='company' type="text"/>
                <input onChange={(e)=>handle(e)} id="checkIn" value={data.checkIn} placeholder='checkIn' type="text"/>
                <input onChange={(e)=>handle(e)} id="checkOut" value={data.checkOut} placeholder='checkOut' type="text"/>
                <input onChange={(e)=>handle(e)} id="numberOfNights" value={data.numberOfNights} placeholder='numberOfNights' type="number"/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Reservation
