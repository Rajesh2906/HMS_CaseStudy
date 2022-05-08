import React,{useState} from 'react';
import axios from 'axios';
import ManagarInventoryNavBar from './ManagerInventoryNavBar';

function MAddInventory() {
    const url="Manager/manager/addinventory"
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
        <ManagarInventoryNavBar/>
        <div className='body'>  
        <div className="container">
        <div className="title">New Inventory</div>
        <div  className='content'> 
         
            <form onSubmit={(e)=>submit(e)}>
            <div className="user-details"> 
                <div className="input-box"><input onChange={(e)=>handle(e)} id="inventoryCode" value={data.inventoryCode} placeholder='Inventory Code' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="inventoryType" value={data.inventoryType} placeholder='inventory Type' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="inventoryName" value={data.inventoryName} placeholder='Inventory Name' type="text"/></div>
                <div className="input-box"><input onChange={(e)=>handle(e)} id="inventoryQuantity" value={data.inventoryQuantity} placeholder='Inventory Quantity' type="number"/></div>
            </div>
            <div className="resclick">
            <input type="submit" value="Add"/>
            </div>
            </form>
        </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default MAddInventory;