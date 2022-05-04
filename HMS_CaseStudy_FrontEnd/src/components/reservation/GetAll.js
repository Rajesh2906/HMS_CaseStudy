import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import authServices from '../../receptionist/services/auth.services';
import Service from './Service';

const GetAllRes = () => {

  const [reservation, setreservation] = useState([]);

  const init = () => {
    Service.getAll()
      .then(response => {
        console.log('Printing Drug data', response.data);
        setreservation(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    
    init();
  }, []);


  return (
    <div className="container">
      <h3>List of Reservations</h3>
      <hr/>
      <div>
        
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Reservation Name</th>
              <th>Resrvation Price</th>
            </tr>
          </thead>
          <tbody>
          {
            reservation.map(reservation => (
              <tr key={reservation.id}>
                <td>{reservation.name}</td>
                <td>{reservation.price}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
      <div>
    </div>

    </div>
    
  );
}

export default GetAllRes;