import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import OwnerResNavBar from './OwnerResNavBar'

function OResGetAll() {

  const [searchTermById,setSearchTermById] = useState('');
  const [searchTermByPh,setSearchTermByPh] = useState('');
  const [reservation, setreservation] = useState([]);
  axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    return config;
    },
    error => {
    return Promise.reject(error);
    });

  const url="Owner/owner/reservation/getallreservation"
 
    const init = () => { 
      axios.get(url )
          .then(res=>{
            setreservation(res.data);
          },
          );
        }

    useEffect(() => {
       init();
        }, []);
  
  return (
    <React.Fragment> 
        <OwnerResNavBar/>
        <h1>Reservation list off guest</h1>
        <input type="text" placeholder="seach by id" onChange={e=>setSearchTermById(e.target.value)} />
        <input type="text" placeholder="seach by ph" onChange={e=>setSearchTermByPh(e.target.value)} />
        <div>  
        <table>
          <thead className="thead-dark">
            <tr>
            <th>ReservationCode_</th>
              <th>name</th>
              <th>phoneNumber</th>
              <th>checkIn</th>
              <th>checkOut</th>
              <th>NoOfNights</th>
            </tr>
          </thead>
          <tbody>
          {
            reservation.filter((reservation)=>{
              if(searchTermById==""){
                return reservation
              }
              else if(reservation.reservationCode_.toLowerCase().includes(searchTermById.toLowerCase())){
                return reservation
              }
            }).filter((reservation)=>{
              if(searchTermByPh==""){
                return reservation
              }
              else if(reservation.phoneNumber.toLowerCase().includes(searchTermByPh.toLowerCase())){
                return reservation
              }
            }).map(reservation => (
              
              <tr key={reservation.reservationCode_}>
                <td>{reservation.reservationCode_}</td>
                <td>{reservation.name}</td>
                <td>{reservation.phoneNumber}</td>
                <td>{reservation.checkIn}</td>
                <td>{reservation.checkOut}</td>
                <td>{reservation.numberOfNights}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default OResGetAll