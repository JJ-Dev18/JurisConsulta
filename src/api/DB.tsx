import axios from "axios";

const DB = axios.create({
  baseURL: 'https://primer-web-server.herokuapp.com',
  params: {
    limite : '10' 
  }
});

export default DB;