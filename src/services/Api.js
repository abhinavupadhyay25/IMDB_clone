import axios from "axios";

export const categoryMovies=async(API_url)=>{
    try{
        let response=await axios.get(API_url);
        return response.data;
    }catch(error){
        console.log('Error while calling the API', error.message);
        return error.response.data;
    }
}