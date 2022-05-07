import React,{useState} from 'react';
import axios from 'axios';
import ManagerRatesNavBar from './ManagerRatesNavBar';

function MAddNewRate() {
    const url="Manager/manager/rates/addrate"
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
        <ManagerRatesNavBar/>
        <div className='body'>  
        <div class="container">
        <div class="title">Add New Price</div>
        <div  className='content'>
            <form onSubmit={(e)=>submit(e)}> 
            <div class="user-details">
                
            <div className="input-box" >
                <input onChange={(e)=>handle(e)} id="rateId" value={data.rateId} placeholder='Rate Id' type="text"/>
            </div>
            <div className="input-box" >
                <input onChange={(e)=>handle(e)} id="firstNightPrice" value={data.firstNightPrice} placeholder='Day1 Night Price' type="text"/>
            </div>
            <div className="input-box" >
                <input onChange={(e)=>handle(e)} id="nightPrice" value={data.nightPrice} placeholder='Night Price' type="text"/>
            </div>
            <div className="input-box" >
                <input onChange={(e)=>handle(e)} id="dayPrice" value={data.dayPrice} placeholder='Day Price' type="text"/>
            </div>
            </div>
            <div className="resclick">
                <input type="submit" value="Submit"/>
            </div>
            </form>
        </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default MAddNewRate;