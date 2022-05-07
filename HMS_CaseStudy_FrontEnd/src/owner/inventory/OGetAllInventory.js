import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import OwnerInventoryNavBar from './OwnerInventoryNavBar';


function OGetAllInventory() {

  const [inventory, setInventory] = useState([]);
  const [searchByInventoryId,setSearchByInventoryId] = useState('');
  const [searchByInventoryName,setSearchByInventoryName] = useState('');

  const url="Owner/owner/inventory/getallinventory"
 
    const init = () => { 
      axios.get(url )
          .then(res=>{
            setInventory(res.data);
          },
          );
        }

    useEffect(() => {
       init();
        }, []);
    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
        return config;
          },
        error => {
        return Promise.reject(error);
          });
  return (
    <React.Fragment> 
        <OwnerInventoryNavBar/>
        <input type="text" placeholder="seach by id" onChange={e=>setSearchByInventoryId(e.target.value)} />
        <input type="text" placeholder="seach by name" onChange={e=>setSearchByInventoryName(e.target.value)} />
        <div>  
        <table>
          <thead className="thead-dark">
            <tr>
                <th>Inventory Code</th>
                <th>Inventory Name</th>
                <th>Inventory Type</th>
                <th>Inventory Quantity</th>
            </tr>
          </thead>
          <tbody>
          {
            inventory.filter((inventory)=>{
              if(searchByInventoryId==""){
                return inventory
              }
              else if(inventory.inventoryCode.toLowerCase().includes(searchByInventoryId.toLowerCase())){
                return inventory
              }
            }).filter((inventory)=>{
              if(searchByInventoryName==""){
                return inventory
              }
              else if(inventory.inventoryName.toLowerCase().includes(searchByInventoryName.toLowerCase())){
                return inventory
              }
            }).map(inventory => (
              <tr key={inventory.inventoryCode}>
                <td>{inventory.inventoryCode}</td>
                <td>{inventory.inventoryName}</td>
                <td>{inventory.inventoryType}</td>
                <td>{inventory.inventoryQuantity}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default OGetAllInventory