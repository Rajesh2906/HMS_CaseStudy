import axios from "axios";

class AuthService {

login(username, password) {
  
  const API_URL = "Receptionist/receptionist/authenticate?password="+password+"&username="+username;
    return axios
        .post(API_URL , {
        username,
        password
        })
        .then(response => {
          const token = response.data;
          localStorage.setItem("SavedToken" , token) 
          console.log(token);
        });
    }
    


  logout(){
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return localStorage.getItem('user');
  };
  
}

export default new AuthService();