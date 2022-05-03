export default function authHeader() {
    const user = localStorage.getItem('user');
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken }; 
      // for Spring Boot back-end
      
    } else {
      return {};
    }
  }