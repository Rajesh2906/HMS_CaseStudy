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
    <h1>Print Bill</h1>
    <div> 
        <form> 
            <input onChange={(e)=>handle(e)} id="billNumber" value={data.billNumber} placeholder='Bill Code' type="text"/>
            <button type='button'>Download</button>
        </form>
    </div>
</React.Fragment>
)
}

export default OPrintBill
