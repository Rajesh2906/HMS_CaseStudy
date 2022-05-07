import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import OwnerBillNavBar from './OwnerBillNavBar';



function OPrintBill() {
  const[data,setData]=useState({        
    billNumber:"",    
})
axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    config.headers.accept = "application/pdf";
    return config;
    },
    error => {
    return Promise.reject(error);
    });
    const url="Owner/owner/bill/printbill?BillCode=" + data.billNumber;
    
    

function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
}
return (
<React.Fragment> 
    <OwnerBillNavBar/>
    <div className='body'> 
    <div class="container">
    <div class="title">Print Bill</div>
    <br/>
    <div> 
        <form> 
        <div class="user-details">
        <div class="input-box" >
            <input onChange={(e)=>handle(e)} id="billNumber" value={data.billNumber} placeholder='Bill Code' type="text"/>
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

export default OPrintBill