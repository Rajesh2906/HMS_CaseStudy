import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import authService from './services/auth.services';


function RecepLogin() {
 
    const[data,setData]=useState({
        username:"",
        password:""
    })

    const navigate =  useNavigate();

    const handleLogin = async  (e)=>{
        e.preventDefault();
        try{
            await authService.login(data.username,data.password).then(
                ()=>{
                    navigate("/recephome");
                    window.location.reload();
                    alert("login successfully");
                },
                (error)=>{
                    console.log(error);
                    alert("incorrect credentials");
                }
            )
        }
        catch(err){
            console.log(err);
        }
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        
    }

    return (
    <React.Fragment>
        <div>
            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <input onChange={(e)=>handle(e)} id="username" value={data.username} placeholder='username' type="text"/>
                <input onChange={(e)=>handle(e)} id="password" value={data.password} placeholder='password' type="text"/>
                <button type="submit">Log in</button>

            </form>
        </div>
    </React.Fragment>
  )
}

export default RecepLogin