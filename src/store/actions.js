// import { SET_TODO_INPUT} from "./Constains";

// export const setTodoInput = (payload) => ({
//   type: SET_TODO_INPUT,
//   payload,
// });

import {
  ADD_A_NEW_ACCOUNT,
  ADD_CART_ITEM,
  REMOVE_A_CART_ITEM,
} from "./Constains";

export const addANewAccount = (payload) => ({
  type: ADD_A_NEW_ACCOUNT,
  payload,
});

export const addCartItem = (payload) => ({
  type: ADD_CART_ITEM,
  payload,
});

export const removeCartItem = (payload) => ({
  type: REMOVE_A_CART_ITEM,
  payload,
});
