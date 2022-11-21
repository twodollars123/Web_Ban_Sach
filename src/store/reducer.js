import { actions } from ".";
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
  SET_DATA_MODAL
} from "./Constains";

const initState = {
  isAuth: false,
  isLoading: true,
  showModal:false,
  dataModal:{},
  menus: [],
  categories: [],
  dataCartItems: JSON.parse(localStorage.getItem("dataCart")) || [],
};
function reducer(state, action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal:action.payload,
      };
    case SET_DATA_MODAL:
      return {
        ...state,
        dataModal:action.payload
      }
    case SET_MENUS:
      return {
        ...state,
        menus: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ADD_A_NEW_ACCOUNT:
      return {
        ...state,
        accountUser: action.payload,
      };
    case ADD_CART_ITEM:
      let check = true;
      let dataCartItems = [...state.dataCartItems]
      dataCartItems.map((item) => {
        if (item._id === action.payload._id) {
          item.quantity = parseInt(item.quantity + 1);
          item.totalPrice = parseInt(item.price) * parseInt(item.quantity);
          check = false;
        }
      });
      check
        ? localStorage.setItem(
            "dataCart",
            JSON.stringify([...state.dataCartItems, action.payload])
          )
        : localStorage.setItem(
            "dataCart",
            JSON.stringify([...state.dataCartItems])
          );
      return {
        ...state,
        dataCartItems: check ? [...state.dataCartItems, action.payload] : JSON.parse(localStorage.getItem("dataCart")),
      };
      case SET_CART_ITEM:
        return {
          ...state,
          dataCartItems: action.payload,
        };
    case REMOVE_A_CART_ITEM:
      localStorage.setItem(
        "dataCart",
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        dataCartItems: action.payload,
      };

    default:
      throw new Error("Invalid actions");
  }
}

export { initState };
export default reducer;
