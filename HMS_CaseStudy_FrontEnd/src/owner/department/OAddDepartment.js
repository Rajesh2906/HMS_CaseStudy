import React,{useState} from 'react';
import axios from 'axios';
import OwnerDepartmentNavBar from './OwnerDepartmentNavBar';

function OAddDepartment() {
    const url="Owner/owner/department/adddepartment"
    const[data,setData]=useState({
        departmentId:"",
        departmentName:"",
        numberOfEmplyees:""   
    })
    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });
    
    function submit(e){
        const item={
            departmentId:data.departmentId,
            departmentName:data.departmentName,
            numberOfEmplyees:parseInt(data.numberOfEmplyees)
            }
        e.preventDefault();
        axios.post(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Department successfully added");
            },
           );
        
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
    }
  return (
    <React.Fragment> 
        <OwnerDepartmentNavBar/>
        <h1>Add New Department</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}> 
                <input onChange={(e)=>handle(e)} id="departmentId" value={data.departmentId} placeholder='Department Id' type="text"/>
                <input onChange={(e)=>handle(e)} id="departmentName" value={data.departmentName} placeholder='Department Name' type="text"/>
                <input onChange={(e)=>handle(e)} id="numberOfEmplyees" value={data.numberOfEmplyees} placeholder='Employee Count' type="number"/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default OAddDepartment;
