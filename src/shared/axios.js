import axios from "axios";

const lmsApiHostProd = "https://api.lms.net";
const lmsApiHostDev = "http://localhost:3001";
const lmsApiHost =
  process.env.NODE_ENV === "development" ? lmsApiHostDev : lmsApiHostProd;
 //console.log(lmsApiHost);
const instance = axios.create({
  baseURL: lmsApiHost,
});

export default instance;
//"development","basURL" is enviroment variabel?
