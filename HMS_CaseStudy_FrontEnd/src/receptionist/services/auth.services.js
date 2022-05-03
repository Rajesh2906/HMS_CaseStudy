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
          const token = response.data
        // if (response.data.accessToken) {
        //     localStorage.setItem("user", response.data);
        //     console.log(response.data.accessToken);
        // }

        // return response.data;
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