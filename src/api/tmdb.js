import axios from "axios";
const KEY = "USE_OWN_KEY";
const URL = "https://api.themoviedb.org/3";

export default axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
    
  }
});
