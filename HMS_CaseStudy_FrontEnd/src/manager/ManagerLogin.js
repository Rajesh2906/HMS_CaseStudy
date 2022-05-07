import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import AuthService from './services/auth.services';
import userlogin from './images/managerlogin.png'



function ManagerLogin() {
 
    const[data,setData]=useState({
        username:"",
        password:""
    })

    const navigate =  useNavigate();

    const handleLogin = async  (e)=>{
        e.preventDefault();
        try{
            await AuthService.login(data.username,data.password).then(
                ()=>{
                    navigate("/managerhome");
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
            <body class="managerbody">
    <div class="wrapper fadeInDown">
        <div id="formContent">    
         <h2 class="active">Manager LogIn </h2>
        <div class="fadeIn first">
          <img src={userlogin} id="icon" alt="User Icon" />
        </div>
            <form   onSubmit={handleLogin}>
               <input onChange={(e)=>handle(e)}  value={data.username} id="username" type="text" class="fadeIn second" name="login" placeholder="Username"/>
               <input onChange={(e)=>handle(e)} value={data.password} type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
               <input type="submit" class="fadeIn fourth" value="Log In"/>
            </form>    
         <div id="formFooter">
         </div>
        </div>
    </div>   
    </body>
        </React.Fragment>
  )
}

export default ManagerLogin;