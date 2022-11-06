import axios from "axios";

const request = axios.create({
  baseURL: "https://turborvip-book-store.herokuapp.com/",
});

export const get = async (pathApi, options = {}) => {
  const res = await request.get(pathApi, options);
  return res.data;
};

export default request;
