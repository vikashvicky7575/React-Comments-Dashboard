import axios from 'axios';

// Fake api for get the datas
const API_URL = "https://jsonplaceholder.typicode.com/comments";

//fetch the data using async,await and axios library
export const fetchComments = async ()=>{
    const response = await axios.get(API_URL);
    return response.data;
};