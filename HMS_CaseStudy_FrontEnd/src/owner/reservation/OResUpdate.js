import React,{useState} from 'react'
import axios from 'axios';
import OwnerResNavBar from './OwnerResNavBar';

function OResUpdate() {
  const url="Owner/owner/reservation/updatereservation";
  const[reservation,setReservation]=useState({        
    reservationCode_:"",    
})
    const[data,setData]=useState({        
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
    // ROUTE TO FIND RESERVATION BY ID
    const idurl="Owner/owner/reservation/getreservationbyid?id="+reservation.reservationCode_;
    function reservationsubmit(i){
        i.preventDefault(); 
        axios.get(idurl)
            .then(res=>{
                setData(res.data);
            },
           );
        
    }
    
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
        axios.put(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Reservation details successfully updated");
                window.location.reload();
            },
           );
        
    }
    function reshandle(i){
        const newdata={...reservation}
        newdata[i.target.id]=i.target.value
        setReservation(newdata)
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
  return (
    <React.Fragment> 
        <OwnerResNavBar/>
        <h1>Enter Guest Id</h1>
        <div> 
            <form onSubmit={(i)=>reservationsubmit(i)}> 
                <input onChange={(i)=>reshandle(i)} id="reservationCode_" value={reservation.reservationCode_} placeholder='Reservation Code' type="text"/>
                <button>submit</button>
            </form>
        </div>
        <h1>Reservation update Form</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="reservationCode_" value={data.reservationCode_} placeholder='Reservation ID' type="text"/>
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

export default OResUpdate