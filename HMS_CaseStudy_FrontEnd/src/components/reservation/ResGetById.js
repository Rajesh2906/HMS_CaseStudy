import React,{useState} from 'react'
import axios from 'axios';
import ResNavBar from './ResNavBar';

function ResGetById() {

  const[data,setData]=useState({        
    ReservationiId:""})
  const url="Receptionist/Receptionist/reservation/getreservationbyid?id="+
  axios.interceptors.request.use(
      config => {
      config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
      return config;
      },
      error => {
      return Promise.reject(error);
      });
  function submit(e){
      e.preventDefault();
      axios.get(url+data.ReservationiId)
          .then(res=>{
            document.write(res.data);
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
      <ResNavBar/>
      <h1>Reservation update Form</h1>
      <div> 
          <form onSubmit={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} id="ReservationiId" value={data.ReservationiId} placeholder='ReservationiId' type="text"/>
            <button>submit</button>
          </form>
      </div>
  </React.Fragment>
)
}

export default ResGetById