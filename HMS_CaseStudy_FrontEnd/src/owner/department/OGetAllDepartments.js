import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import OwnerDepartmentNavBar from './OwnerDepartmentNavBar';


function OGetAllDepartments() {

  const [department, setDepartment] = useState([]);
  const [searchByDepartmentId,setSearchByDepartmentId] = useState('');
  
  const url="Owner/owner/department/getalldepartments"
 
    const init = () => { 
      axios.get(url)
          .then(res=>{
            setDepartment(res.data);
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
        <OwnerDepartmentNavBar/>
        <h1>Rates</h1>
        <input type="text" placeholder="seach by id" onChange={e=>setSearchByDepartmentId(e.target.value)} />
        <div>  
        <table>
          <thead className="thead-dark">
            <tr>
            <th>Department Id</th>
              <th>Department Name</th>
              <th>Employee Count</th>
            </tr>
          </thead>
          <tbody>
          {
            department.filter((department)=>{
              if(searchByDepartmentId==""){
                return department
              }
              else if(department.departmentId.toLowerCase().includes(searchByDepartmentId.toLowerCase())){
                return department
              }
            }).map(department => (
              <tr key={department.departmentId}>
                <td>{department.departmentId}</td>
                <td>{department.departmentName}</td>
                <td>{department.numberOfEmplyees}</td>
              </tr>))
          }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}

export default OGetAllDepartments