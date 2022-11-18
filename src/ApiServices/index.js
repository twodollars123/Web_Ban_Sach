import * as request from "../ultis/request";

export const register = async (data) => {
  try {
    const res = await request.post("/auth/local/register",data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data) => {
  try {
    const res = await request.post("/auth/local",data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const menus = async () => {
  try {
    const res = await request.get("menus");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const categories = async () => {
  try {
    const res = await request.get("categories");
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const products = async () => {
  try {
    const res = await request.get("products");
    return res;
  } catch (error) {
    console.log(error);
  }
};



