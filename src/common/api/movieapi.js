import axios from "axios";

export const API = '6ea0f2b7';


export default axios.create({
    baseURL: "http://www.omdbapi.com"
})