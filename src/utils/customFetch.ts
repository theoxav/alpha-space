const snapiAPI = "https://api.spaceflightnewsapi.net/v4/articles/";
import axios from "axios";

export const snapiCustomFetch = axios.create({
  baseURL: snapiAPI,
});
