import React,{useState} from 'react';
import axios from 'axios';
import RecepGusNavBar from './RecepGuestNavBar';

function RGuestAddReserved() {
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
        const url="Receptionist/receptionist/guest/addreservedguest?reservationcode="+data.reservationCode+"&roomNo="+data.roomNumber;
    
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
                alert("Guest details successfully added");
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
                <input onChange={(e)=>handle(e)} id="reservationCode" value={data.reservationCode} placeholder='Reservation Code' type="text"/>
                <input onChange={(e)=>handle(e)} id="roomNumber" value={data.roomNumber} placeholder='Room Number' type="text"/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default RGuestAddReserved;


