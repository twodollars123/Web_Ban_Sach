import * as request from "../ultis/request";

export const register = async (data) => {
  try {
    const res = await request.post("/auth/local/register", data);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (data) => {
  try {
    const res = await request.post("/auth/local", data);
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

export const bestseller = async (page, pageSize) => {
  try {
    page = page || 1;
    pageSize = pageSize || 10;
    const res = await request.get(
      `productsBestSeller?&page=${page}&pageSize=${pageSize}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const productsByNameCategory = async (name, page, pageSize) => {
  try {
    name = name || "Kho sách";
    page = page || 1;
    pageSize = pageSize || 10;
    const res = await request.get(
      `productsByCategory?category=${name}&page=${page}&pageSize=${pageSize}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const productsByIdCategory = async (id, page, pageSize) => {
  try {
    page = page || 1;
    pageSize = pageSize || 10;
    const res = await request.get(
      `productsByCategory/${id}?page=${page}&pageSize=${pageSize}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const productsById = async (id) => {
  try {
    const res = await request.get(`products/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const userProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token,
    };
    const res = await request.get(`users/me`, { headers });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const userOrders = async (page,pageSize) => {
  try {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const data = {userID:user?.id}  
    const headers = {
      Authorization: "Bearer " + token,
    };
    page = page || 1;
    pageSize = pageSize || 10; 
    const res = await request.post(`ordersByUser?page=${page}&pageSize=${pageSize}`,data,{ headers });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateStatusOrder = async (id,status) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: "Bearer " + token,
    };
    let res;
    if(status=='success'){
      res = await request.put(`ordersStatusSuccess/${id}`,{ headers });
    }else if(status=='cancelled'){
      res = await request.put(`ordersStatusCancel/${id}`,{ headers });
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};