import React from 'react'
import axios from 'axios';
import ResNavBar from './ResNavBar'

function ResGetAll() {
  const url="Receptionist/Receptionist/reservation/getallreservation"
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
        axios.get(url )
            .then(res=>{
              document.write(res.data);
              console.log(res.data);
            },
           );
        
    }   
  return (
    <React.Fragment> 
        <ResNavBar/>
        <h1>Reservation update Form</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default ResGetAll