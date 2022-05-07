import React,{useState} from 'react';
import axios from 'axios';
import OwnerRatesNavBar from './OwnerRatesNavBar';

function OAddNewRate() {
    const url="Owner/owner/rates/addrate"
    const[data,setData]=useState({
        rateId:"",
        firstNightPrice:"",
        nightPrice:"",
        dayPrice:""
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
            rateId:data.rateId,
            firstNightPrice:parseFloat(data.firstNightPrice),
            nightPrice:parseFloat(data.nightPrice),  
            dayPrice:parseFloat(data.dayPrice),
            }
        e.preventDefault();
        axios.post(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Rate successfully added");
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
        <OwnerRatesNavBar/>
        <h1>Add New Price</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}> 
                <input onChange={(e)=>handle(e)} id="rateId" value={data.rateId} placeholder='Rate Id' type="text"/>
                <input onChange={(e)=>handle(e)} id="firstNightPrice" value={data.firstNightPrice} placeholder='Day1 Night Price' type="text"/>
                <input onChange={(e)=>handle(e)} id="nightPrice" value={data.nightPrice} placeholder='Night Price' type="text"/>
                <input onChange={(e)=>handle(e)} id="dayPrice" value={data.dayPrice} placeholder='Day Price' type="text"/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default OAddNewRate;
