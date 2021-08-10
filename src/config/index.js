import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.0.12:8080/api/v1"
});

//baseURL: "https://apifinance2021.herokuapp.com/api/v1"
//192.168.0.12
//baseURL: "http://192.168.0.12:8080/api/v1"