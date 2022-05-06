import React,{useState} from 'react';
import axios from 'axios';

import RecepBillNavBar from './RecepBillNavBar';



function RGenerateBill() {

    const[data,setData]=useState({        
        billNumber:"",
        guestCode:"",
        quantity:"",
        totalPrice_:"",
        taxes:"",  
        date:"",
        services:"",
        unit:"",
        rateId:""
    })
    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });
        const url = "Receptionist/receptionist/bill/generatebill?guestCode="+data.guestCode+"&rateId="+data.rateId;
    function submit(e){
        const item={
            date:data.date,
            billNumber:data.billNumber,
            guestCode:data.guestCode,
            quantity:data.quantity,
            totalPrice_:data.totalPrice_,
            taxes:data.taxes,
            services:data.services,
            unit:data.unit
            }
        e.preventDefault();
        axios.post(url,item)
            .then(res=>{
                alert("Bill generated successfully added");
            },
           );
        
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }

return(
    <React.Fragment>     
        <RecepBillNavBar/>
        <h1>Reservation Add Form</h1>
        <div  className='addform'> 
            <form onSubmit={(e)=>submit(e)}>               
                <input onChange={(e)=>handle(e)} id="guestCode" value={data.guestCode} placeholder='Guest Code' type="text"/>
                <input onChange={(e)=>handle(e)} id="quantity" value={data.quantity} placeholder='Quantity' type="number"/>
                <input onChange={(e)=>handle(e)} id="services" value={data.services} placeholder='Services' type="number"/>
                <input onChange={(e)=>handle(e)} id="unit" value={data.unit} placeholder='Unit' type="number"/>
                <input onChange={(e)=>handle(e)} id="rateId" value={data.rateId} placeholder='Rate Id' type="text"/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
)
}

export default RGenerateBill
