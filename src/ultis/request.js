import axios from "axios";


const request = axios.create({
  baseURL: "http://54.95.16.28:1337/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (pathApi, options = {}) => {
  const res = await request.get(pathApi, options);
  return res.data;
};

export const post = async (pathApi, options) => {
  const res = await request.post(pathApi, options);
  return res.data;
};

export default request;
