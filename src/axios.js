import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/challenge-a3c51/us-central1/api",
     headers:{
    'X-Requested-With': 'XMLHttpRequest'
  },
    
});


export default instance;

