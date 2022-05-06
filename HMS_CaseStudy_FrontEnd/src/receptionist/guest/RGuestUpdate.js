import React,{useState} from 'react'
import axios from 'axios';
import RecepGusNavBar from './RecepGuestNavBar';


function RGuestUpdate() {
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
    const idurl="Receptionist/receptionist/guest/getguestbyid?guestCode="+guest.guestCode_;
    const url="Receptionist/receptionist/guest/updateGuest"
    function guestsubmit(i){
        i.preventDefault(); 
        axios.get(idurl)
            .then(res=>{
                setData(res.data);
            },
           );
        
    }
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
        axios.put(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Reservation details successfully updated");
            },
           );
           window.location.reload();
        
    }
    function guesthandle(i){
        const newdata={...guest}
        newdata[i.target.id]=i.target.value
        setGuest(newdata)
    }
    
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }

  return (
    <React.Fragment> 
        <RecepGusNavBar/>
        <h1>Enter Guest Id</h1>
        <div> 
            <form onSubmit={(i)=>guestsubmit(i)}> 
                <input onChange={(i)=>guesthandle(i)} id="guestCode_" value={guest.guestCode_} placeholder='Guest Code' type="text"/>
                <button>submit</button>
            </form>
        </div>
        <h1>Reservation update Form</h1>
        <div> 
        <form onSubmit={(e)=>submit(e)}> 
                <input onChange={(e)=>handle(e)} id="guestCode_" value={data.guestCode_} placeholder='Guest Code' type="text"/>
                <input onChange={(e)=>handle(e)} id="name_" value={data.name_} placeholder='name' type="text"/>
                <input onChange={(e)=>handle(e)} id="phoneNumber_" value={data.phoneNumber_} placeholder='phoneNumber' type="text"/>
                <input onChange={(e)=>handle(e)} id="emailId_" value={data.emailId_} placeholder='emailId' type="email"/>
                <input onChange={(e)=>handle(e)} id="gender_" value={data.gender_} placeholder='gender' type="text"/>
                <input onChange={(e)=>handle(e)} id="address_" value={data.address_} placeholder='address' type="text"/>
                <input onChange={(e)=>handle(e)} id="numberOfAdult" value={data.numberOfAdult} placeholder='numberOfAdult' type="number"/>
                <input onChange={(e)=>handle(e)} id="numberOfChildren" value={data.numberOfChildren} placeholder='numberOfChildren' type="number"/>
                <input onChange={(e)=>handle(e)} id="company_" value={data.company_} placeholder='company' type="text"/>
                <input onChange={(e)=>handle(e)} id="checkIn" value={data.checkIn} placeholder='checkIn' type="text"/>
                <input onChange={(e)=>handle(e)} id="checkOut" value={data.checkOut} placeholder='checkOut' type="text"/>
                <input onChange={(e)=>handle(e)} id="numberOfNights" value={data.numberOfNights} placeholder='numberOfNights' type="number"/>
                <input onChange={(e)=>handle(e)} id="roomNumber" value={data.roomNumber} placeholder='RoomNo' type="text"/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default RGuestUpdate