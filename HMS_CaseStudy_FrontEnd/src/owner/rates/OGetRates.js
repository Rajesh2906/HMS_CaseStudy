import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import OwnerRatesNavBar from './OwnerRatesNavBar';


function OGetRates() {

  const [rates, setRates] = useState([]);
  const [searchByRateId,setSearchByRateId] = useState('');
  
  const url="Owner/owner/rates/getallrates"
 
    const init = () => { 
      axios.get(url)
          .then(res=>{
            setRates(res.data);
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
        <OwnerRatesNavBar/>
        <h1>Rates</h1>
        <input type="text" placeholder="seach by id" onChange={e=>setSearchByRateId(e.target.value)} />
        <div>  
        <table>
          <thead className="thead-dark">
            <tr>
            <th>Rate Id</th>
              <th>Day1 Night Price</th>
              <th>Night Price</th>
              <th>Day Price</th>
            </tr>
          </thead>
          <tbody>
          {
            rates.filter((rates)=>{
              if(searchByRateId==""){
                return rates
              }
              else if(rates.rateId.toLowerCase().includes(searchByRateId.toLowerCase())){
                return rates
              }
            }).map(rates => (
              <tr key={rates.rateId}>
                <td>{rates.rateId}</td>
                <td>{rates.firstNightPrice}</td>
                <td>{rates.nightPrice}</td>
                <td>{rates.dayPrice}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default OGetRates