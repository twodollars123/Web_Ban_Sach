// import { SET_TODO_INPUT} from "./Constains";

// export const setTodoInput = (payload) => ({
//   type: SET_TODO_INPUT,
//   payload,
// });

import {
  ADD_A_NEW_ACCOUNT,
  ADD_CART_ITEM,
  SET_CART_ITEM,
  REMOVE_A_CART_ITEM,
  SET_AUTH,
  SET_LOADING,
  SET_CATEGORIES,
  SET_MENUS,
  SET_SHOW_MODAL,
  SET_DATA_MODAL,
} from "./Constains";

export const addANewAccount = (payload) => ({
  type: ADD_A_NEW_ACCOUNT,
  payload,
});

export const addCartItem = (payload) => ({
  type: ADD_CART_ITEM,
  payload,
});

export const setCartItem = (payload) => ({
  type: SET_CART_ITEM,
  payload,
});

export const removeCartItem = (payload) => ({
  type: REMOVE_A_CART_ITEM,
  payload,
});

export const setAuth = (payload) => ({
  type: SET_AUTH,
  payload,
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setShowModal = (payload) => ({
  type: SET_SHOW_MODAL,
  payload,
});

export const setDataModal = (payload) => ({
  type:SET_DATA_MODAL,
  payload
})

export const setMenus = (payload) => ({
  type: SET_MENUS,
  payload,
});

export const setCategories = (payload) => ({
  type: SET_CATEGORIES,
  payload,
});
