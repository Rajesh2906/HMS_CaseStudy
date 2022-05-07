import React,{useState} from 'react';
import axios from 'axios';
import OwnerInventoryNavBar from './OwnerInventoryNavBar';

function OAddInventory() {
    const url="Owner/owner/inventory/addinventory"
    const[data,setData]=useState({
        inventoryCode:"",
        inventoryType:"",
        inventoryName:"",
        inventoryQuantity:""
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
            inventoryCode:data.inventoryCode,
            inventoryType:data.inventoryType,
            inventoryName:data.inventoryName,  
            inventoryQuantity:data.inventoryQuantity
            }
        e.preventDefault();
        axios.post(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Inventory details added");
            },
           );
           window.location.reload();
        
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
  return (
    <React.Fragment> 
        <OwnerInventoryNavBar/>
        <h1>Add Inventory</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}> 
                <input onChange={(e)=>handle(e)} id="inventoryCode" value={data.inventoryCode} placeholder='Inventory Code' type="text"/>
                <input onChange={(e)=>handle(e)} id="inventoryType" value={data.inventoryType} placeholder='inventory Type' type="text"/>
                <input onChange={(e)=>handle(e)} id="inventoryName" value={data.inventoryName} placeholder='Inventory Name' type="text"/>
                <input onChange={(e)=>handle(e)} id="inventoryQuantity" value={data.inventoryQuantity} placeholder='Inventory Quantity' type="number"/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default OAddInventory;
