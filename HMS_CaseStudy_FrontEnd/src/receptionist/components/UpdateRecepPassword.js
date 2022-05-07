import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate ,NavLink} from 'react-router-dom';


function UpdateRecepPassword() {
    const[message,setMessage]=useState(null);
    const[data,setData]=useState({
        userId:"",
        password:"",
        newpassword:""
    })
    axios.interceptors.request.use(
        config => {
        config.headers.authorization = "Bearer " + localStorage.getItem("SavedToken");
        return config;
        },
        error => {
        return Promise.reject(error);
        });
    const url = "Receptionist/receptionist/updatereceptionist?password=w"+data.newpassword
    const navigate =  useNavigate();
    function submit(e){
        const item={
            userId:data.userId,
            password:data.password,
            newpassword:data.newpassword
            }
        e.preventDefault();
        axios.put(url,item )
            .then(res=>{
                console.log(res.data);
                setMessage("Details Updated Successfully");
                navigate("/recephome");
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
        <NavLink to="/recephome">Home</NavLink> 
        <h1>Change Password</h1>
        <div> 
            <form onSubmit={(e)=>submit(e)}> 
                <input onChange={(e)=>handle(e)} id="userId" value={data.userId} placeholder='User Id' type="text" required/>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='Password' type="password" required/>
                <input onChange={(e)=>handle(e)} id="newpassword" value={data.newpassword} placeholder='New Password' type="password" required/>
                {message && <div className='message'>{message}</div>}
                <button>submit</button>
            </form>
        </div>
    </React.Fragment>
  )
    }

export default UpdateRecepPassword;