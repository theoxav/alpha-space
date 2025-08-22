import axios from "axios";

const snapi_api = "https://api.spaceflightnewsapi.net/v4/articles/";

export const snapiCustomFetch = axios.create({
  baseURL: snapi_api,
});
