import React,{useState} from 'react';
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';

function AddReceptionist() {
    const url="Manager/manager/addreceptionist"
    const[data,setData]=useState({
        userId:"",
        password:""
    })
    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });
    const navigate =  useNavigate();
    function submit(e){
        const item={
            userId:data.userId,
            password:data.password
            }
        e.preventDefault();
        axios.post(url,item )
            .then(res=>{
                console.log(res.data);
                alert("Receptionist details added");
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
        <NavLink to="/managerhome">Home</NavLink> 
        <h1>Add Receptionist</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}> 
                <input onChange={(e)=>handle(e)} id="userId" value={data.userId} placeholder='User Id' type="text" required/>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='Password' type="password" required/>
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default AddReceptionist;
