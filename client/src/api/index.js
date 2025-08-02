import axios from "axios";

const request = axios.create({
     // baseURL: `/development`,
     baseURL: `https://jyuacm.icescoffee.com/test`,
     timeout: 5000,
     headers: {
          "Content-Type": "application/json",
     },
});


export default request;