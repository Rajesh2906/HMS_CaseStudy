import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecepBillNavBar from './RecepBillNavBar';

function RGetAllBills() {

  const [searchTermByBillNumber,setSearchTermByBillNumber] = useState('');
  const [searchTermByGuestCode,setSearchTermByGuestCode] = useState('');
  const [bills, setBill] = useState([]);
  axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    return config;
    },
    error => {
    return Promise.reject(error);
    });

  const url="Receptionist/receptionist/bill/getallbills"
 
    const init = () => { 
      axios.get(url )
          .then(res=>{
            setBill(res.data);
          },
          );
        }

    useEffect(() => {
       init();
        }, []);
  
  return (
    <React.Fragment> 
        <RecepBillNavBar/>
        <h1>Reservation list off guest</h1>
        <input type="text" placeholder="seach by bill number" onChange={e=>setSearchTermByBillNumber(e.target.value)} />
        <input type="text" placeholder="seach by guest code" onChange={e=>setSearchTermByGuestCode(e.target.value)} />
        <div>  
        <table>
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Bill Number</th>
              <th>Guest Code</th>
              <th>Quantity</th>
              <th>Taxes</th>
              <th>Services</th>
              <th>Unit</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
          {
            bills.filter((bills)=>{
              if(searchTermByBillNumber==""){
                return bills
              }
              else if(bills.billNumber.toLowerCase().includes(searchTermByBillNumber.toLowerCase())){
                return bills
              }
            }).filter((bills)=>{
              if(searchTermByGuestCode==""){
                return bills
              }
              else if(bills.phoneNumber.toLowerCase().includes(searchTermByGuestCode.toLowerCase())){
                return bills
              }
            }).map(bills => (
              
              <tr key={bills.billNumber}>
                <td>{bills.date}</td>
                <td>{bills.billNumber}</td>
                <td>{bills.guestCode}</td>
                <td>{bills.quantity}</td>
                <td>{bills.taxes}</td>
                <td>{bills.services}</td>
                <td>{bills.unit}</td>
                <td>{bills.totalPrice_}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default RGetAllBills