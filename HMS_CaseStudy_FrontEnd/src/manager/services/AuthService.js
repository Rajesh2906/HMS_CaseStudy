import axios from "axios";



class AuthService {

login(username, password) {
  const API_URL = "Manager/manager/authenticate?password="+password+"&username="+username;
    return axios
        .post(API_URL , {
        username,
        password
        })
        .then(response => {
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
        });
    }
    


  logout(){
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  };
}

export default new AuthService();