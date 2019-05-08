import axios from "axios";
const KEY = "e75afbad5b20ac7756fd678a858cf473";
const URL = "https://api.themoviedb.org/3";

export default axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
    
  }
});
