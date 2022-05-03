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
        if (response.data.accessToken) {
            const token = localStorage.setItem("user", response.data);
            console.log(this.token);
        }

        return response.data;
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