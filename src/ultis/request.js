import axios from "axios";


const request = axios.create({
  baseURL: "http://localhost:1337/",
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
