import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import OwnerGuestNavBar from './OwnerGuestNavBar';


function OGuestGetAll() {

  const [guest, setGuest] = useState([]);
  const [searchTermById,setSearchTermById] = useState('');
  const [searchTermByPh,setSearchTermByPh] = useState('');

  const url="Owner/owner/guest/getallguests"
 
    const init = () => { 
      axios.get(url )
          .then(res=>{
            setGuest(res.data);
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
        <OwnerGuestNavBar/>
        <h1>Guest List</h1>
        <input type="text" placeholder="seach by id" onChange={e=>setSearchTermById(e.target.value)} />
        <input type="text" placeholder="seach by ph" onChange={e=>setSearchTermByPh(e.target.value)} />
        <div>  
        <table>
          <thead className="thead-dark">
            <tr>
            <th>Guest Code</th>
              <th>name</th>
              <th>phoneNumber</th>
              <th>checkIn</th>
              <th>checkOut</th>
              <th>NoOfNights</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {
            guest.filter((guest)=>{
              if(searchTermById==""){
                return guest
              }
              else if(guest.guestCode_.toLowerCase().includes(searchTermById.toLowerCase())){
                return guest
              }
            }).filter((guest)=>{
              if(searchTermByPh==""){
                return guest
              }
              else if(guest.phoneNumber_.toLowerCase().includes(searchTermByPh.toLowerCase())){
                return guest
              }
            }).map(guest => (
              <tr key={guest.guestCode_}>
                <td>{guest.guestCode_}</td>
                <td>{guest.name_}</td>
                <td>{guest.phoneNumber_}</td>
                <td>{guest.checkIn}</td>
                <td>{guest.checkOut}</td>
                <td>{guest.numberOfNights}</td>
                <td>{guest.guestStatus_}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default OGuestGetAll