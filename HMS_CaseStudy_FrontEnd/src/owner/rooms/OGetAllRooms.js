import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import OwnerRoomsNavBar from './OwnerRoomsNavBar';

function OGetAllRooms() {

  const [searchByRoomNumber,setSearchByRoomNumber] = useState('');
  const [rooms, setRooms] = useState([]);
  axios.interceptors.request.use(
    config => {
    config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
    return config;
    },
    error => {
    return Promise.reject(error);
    });

 const url="Owner/owner/rooms/getallrooms";
 
    const init = () => { 
      axios.get(url)
          .then(res=>{
            setRooms(res.data);
          },
          );
        }

    useEffect(() => {
       init();
        }, []);
  
  return (
    <React.Fragment> 
        <OwnerRoomsNavBar/>
        <h1>List Of Rooms</h1>
        <input type="text" placeholder="seach by id" onChange={e=>setSearchByRoomNumber(e.target.value)} />
        <div>  
        <table>
          <thead className="thead-dark">
            <tr>
            <th>Room Number</th>
              <th>Room Status</th>
              <th>Total Rooms</th>
            </tr>
          </thead>
          <tbody>
          {
            rooms.filter((rooms)=>{
              if(searchByRoomNumber==""){
                return rooms
              }
              else if(rooms.roomNumber.toLowerCase().includes(searchByRoomNumber.toLowerCase())){
                return rooms
              }
            }).map(rooms => (             
              <tr key={rooms.roomNumber}>
                <td>{rooms.roomNumber}</td>
                <td>{rooms.roomStatus_}</td>
                <td>{rooms.totalRooms_}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default OGetAllRooms