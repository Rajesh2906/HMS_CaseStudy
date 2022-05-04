import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ResNavBar from './ResNavBar'

function ResGetAll() {

  const [reservation, setreservation] = useState([]);

  const url="Receptionist/Receptionist/reservation/getallreservation"
 
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
        <ResNavBar/>
        <h1>Reservation update Form</h1>
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
            reservation.map(reservation => (
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

export default ResGetAll