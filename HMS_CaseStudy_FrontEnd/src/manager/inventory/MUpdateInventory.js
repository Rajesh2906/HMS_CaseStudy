import React,{useState} from 'react'
import axios from 'axios';
import ManagarInventoryNavBar from './ManagerInventoryNavBar';


function MUpdateInventory() {
    const[inventory,setInventory]=useState({        
        inventoryCode:"",    
    })
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
    const idurl="Manager/manager/getinventorybyid?inventoryCodse="+inventory.inventoryCode;
    const url="Manager/manager/updateinventory"
    function inventorysubmit(i){
        i.preventDefault(); 
        axios.get(idurl)
            .then(res=>{
                setData(res.data);
            },
           );
        
    }
    function submit(e){
        const item={
          inventoryCode:data.inventoryCode,
          inventoryType:data.inventoryType,
          inventoryName:data.inventoryName,  
          inventoryQuantity:data.inventoryQuantity
            }
        e.preventDefault();
        axios.put(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Inventory details successfully updated");
            },
           );
           window.location.reload();
        
    }
    function inventoryhandle(i){
        const newdata={...inventory}
        newdata[i.target.id]=i.target.value
        setInventory(newdata)
    }
    
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }

  return (
    <React.Fragment> 
        <ManagarInventoryNavBar/>
        <h1>Enter Inventory Code</h1>
        <div> 
            <form onSubmit={(i)=>inventorysubmit(i)}> 
                <input onChange={(i)=>inventoryhandle(i)} id="inventoryCode" value={inventory.inventoryCode} placeholder='Inventory Code' type="text"/>
                <button>search</button>
            </form>
        </div>
        <h1>Inventory Updated</h1>
        <div> 
        <form onSubmit={(e)=>submit(e)}> 
                <input onChange={(e)=>handle(e)} id="inventoryCode" value={data.inventoryCode} placeholder='Inventory Code' type="text"/>
                <input onChange={(e)=>handle(e)} id="inventoryType" value={data.inventoryType} placeholder='Inventory Type' type="text"/>
                <input onChange={(e)=>handle(e)} id="inventoryName" value={data.inventoryName} placeholder='Inventory Name' type="text"/>
                <input onChange={(e)=>handle(e)} id="inventoryQuantity" value={data.inventoryQuantity} placeholder='Inventory Quantity' type="number"/>
                <button>save</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default MUpdateInventory