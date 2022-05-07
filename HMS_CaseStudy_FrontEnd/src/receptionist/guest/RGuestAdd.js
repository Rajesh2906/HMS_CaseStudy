import React,{useState} from 'react';
import axios from 'axios';
import RecepGusNavBar from './RecepGuestNavBar';




function RGuestAdd() {
    const url="Receptionist/receptionist/guest/addnewguest"
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
    
    function submit(e){
        const item={
            reservationCode:data.reservationCode,
            roomNumber:data.roomNumber,
            numberOfAdult:data.numberOfAdult,  
            numberOfChildren:data.numberOfChildren,
            checkIn:data.checkIn,
            checkOut:data.checkOut,
            numberOfNights:data.numberOfNights,
            name_:data.name_,
            emailId_:data.emailId_,  
            phoneNumber_:data.phoneNumber_,
            gender_:data.gender_,
            address_:data.address_,
            company_:data.company_,
            todayDate_:data.todayDate_,
            guestCode_:data.guestCode_,
            guestStatus_:data.guestStatus_
            }
        e.preventDefault();
        axios.post(url,item )
            .then(res=>{
                console.log(res.data);
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
        <div className='body'>  
        <div class="container">
        <div class="title">New Guest</div>
        <div  className='content'> 
            <form onSubmit={(e)=>submit(e)}> 
            <div class="user-details">
                <input onChange={(e)=>handle(e)} id="reservationCode" value={data.reservationCode} placeholder='Reservation Code' type="text" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text"  class="input-box"/>
                <input onChange={(e)=>handle(e)} id="phoneNumber_" value={data.phoneNumber_} placeholder='phoneNumber' type="text" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="emailId_" value={data.emailId_} placeholder='emailId' type="email" class="input-box"/>
                {/* <input onChange={(e)=>handle(e)} id="gender_" value={data.gender_} placeholder='gender' type="text" class="inputguest"/> */}
                <input onChange={(e)=>handle(e)} id="address_" value={data.address_} placeholder='address' type="text" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="numberOfAdult" value={data.numberOfAdult} placeholder='numberOfAdult' type="number" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="numberOfChildren" value={data.numberOfChildren} placeholder='numberOfChildren' type="number" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="company_" value={data.company_} placeholder='company' type="text" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="checkIn" value={data.checkIn} placeholder='checkIn' type="text" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="checkOut" value={data.checkOut} placeholder='checkOut' type="text" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="numberOfNights" value={data.numberOfNights} placeholder='numberOfNights' type="number" class="input-box"/>
                <input onChange={(e)=>handle(e)} id="roomNumber" value={data.roomNumber} placeholder='RoomNo' type="text" class="input-box"/>
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

export default RGuestAdd;
