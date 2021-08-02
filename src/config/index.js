import axios from "axios";

export default axios.create({
    baseURL: "https://apifinance2021.herokuapp.com/api/v1"
});