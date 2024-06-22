
import axios from 'axios';


const link = "http://192.168.56.1:8080/api";
export   const sendData =(data) =>  axios.post(link,data);

const url="http://192.168.56.1:8080/userloginvalidate";

export const loginData=(data) => axios.post(url,data);