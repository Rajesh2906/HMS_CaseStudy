import React,{useState} from 'react';
import axios from 'axios';
import './reservation.css'
import OwnerResNavBar from './OwnerResNavBar';



export function OResAdd() {

   const url = "Owner/owner/reservation/addreservation";
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
        axios.post(url,item)
            .then(res=>{
                alert("Reservation details successfully added");
            },
           );
        
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }

return(
    <React.Fragment>     
        <OwnerResNavBar/>
        <div className='body'>  
        <div class="container">
        <div class="title">New Booking</div>
        <div  className='content'> 
            <form onSubmit={(e)=>submit(e)}>    
            <div class="user-details">
                
                <div class="input-box" >
                    <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="numberOfAdult" value={data.numberOfAdult} placeholder='numberOfAdult' type="number"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="phoneNumber" value={data.phoneNumber} placeholder='phoneNumber' type="text"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="numberOfChildren" value={data.numberOfChildren} placeholder='numberOfChildren' type="number"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="emailId" value={data.emailId} placeholder='emailId' type="email"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="checkIn" value={data.checkIn} placeholder='checkIn' type="date"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="address" value={data.address} placeholder='address' type="text"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="checkOut" value={data.checkOut} placeholder='checkOut' type="date"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="company" value={data.company} placeholder='company' type="text"/>
                </div>
                <div class="input-box">
                <input onChange={(e)=>handle(e)} id="numberOfNights" value={data.numberOfNights} placeholder='numberOfNights' type="number"/>
                </div>
                {/* <div class="input-box">
                <input onChange={(e)=>handle(e)} id="gender" value={data.gender} placeholder='gender' type="text"/>
                </div> */}
                <div class="gender-details">
                    <input type="radio" name="gender"  value={data.gender} id="dot-1"/>
                    <input type="radio" name="gender"  value={data.gender} id="dot-2"/>
                    <span class="gender-title">Gender</span>
                    <div class="category">
                        <label for="dot-1">
                        <span class="dot one"></span>
                        <span class="gender">Male</span>
                    </label>
                    <label for="dot-2">
                        <span class="dot two"></span>
                        <span class="gender">Female</span>
                    </label>
                    </div>
                </div>
            </div>
            <div className="resclick">
            <input type="submit" value="Register"/>
            </div>
                </form>
            </div>
        </div>
    </div>
    </React.Fragment>
)
}

export default OResAdd
