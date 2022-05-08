import React,{useState} from 'react';
import axios from 'axios';
import OwnerGuestNavBar from './OwnerGuestNavBar';

function OGuestAdd() {
    const url="Owner/owner/guest/addnewguest"
    const[message , setMessage] = useState(null);
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
                setMessage("Guest Checked In")
                setTimeout(function(){window.location.reload()},900);
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
        <OwnerGuestNavBar/>
        <div className='body'>  
        <div className="container">
        <div className="title">New Guest</div>
        <div  className='content'> 
            <form onSubmit={(e)=>submit(e)}> 
            <div className="user-details">
                <div className="input-box"><input onChange={(e)=>handle(e)} id="reservationCode" value={data.reservationCode} placeholder='Reservation Code' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="name_" value={data.name_} placeholder='name' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="phoneNumber_" value={data.phoneNumber_} placeholder='phoneNumber' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="emailId_" value={data.emailId_} placeholder='emailId' type="email" /></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="gender_" value={data.gender_} placeholder='gender' type="text" class="inputguest"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="address_" value={data.address_} placeholder='address' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="numberOfAdult" value={data.numberOfAdult} placeholder='numberOfAdult' type="number" /></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="numberOfChildren" value={data.numberOfChildren} placeholder='numberOfChildren' type="number"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="company_" value={data.company_} placeholder='company' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="checkIn" value={data.checkIn} placeholder='checkIn' type="date"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="checkOut" value={data.checkOut} placeholder='checkOut' type="date"/></div>
                <div className="input-box" ><input onChange={(e)=>handle(e)} id="numberOfNights" value={data.numberOfNights} placeholder='numberOfNights' type="number"/></div>
                <div className="input-box" ><input onChange={(e)=>handle(e)} id="roomNumber" value={data.roomNumber} placeholder='RoomNo' type="text"/></div>   
               </div>
               {message && <div className='message'>{message}</div>}
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

export default OGuestAdd;