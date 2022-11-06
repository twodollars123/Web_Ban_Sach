// import { v4 as uuidv4 } from "uuid";

// import { SET_TODO_INPUT } from "./Constains";
// const host = "http://localhost:3000/";

// const initState = { todos: [], todo: "" };
import {
  ADD_A_NEW_ACCOUNT,
  ADD_CART_ITEM,
  REMOVE_A_CART_ITEM,
} from "./Constains";

const initState = {
  menuData: [
    { id: 1, label: "Trang chủ", path: "/" },
    { id: 2, label: "Giới thiệu", path: "/gioithieu" },
    {
      id: 3,
      label: "Sản phẩm",
      path: "/gioithieu/sanpham",
      children: [
        {
          id: 8,
          idParent: 3,
          label: "Kho sách",
          path: "/gioithieu/sanpham/khosach",
          children: [
            {
              id: 9,
              idParent: 8,
              label: "Sách văn học",
              path: "/gioithieusanpham/khosach/sachvanhoc",
            },
            {
              id: 10,
              idParent: 8,
              label: "Truyện thiếu nhi",
              path: "/gioithieusanpham/khosach/truyenthieunhi",
            },
            {
              id: 11,
              idParent: 8,
              label: "Sách khoa học",
              path: "/gioithieusanpham/khosach/sachkhoahoc",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: "Dịch vụ khu vui chơi",
      path: "/dvkhuvuichoi",
    },
    {
      id: 5,
      label: "Tư vấn mua sắm",
      path: "/dvkhuvuichoi/tuvanmuasam",
      children: [
        {
          id: 100,
          idParent: 5,
          label: "Kho sách",
          path: "/dvkhuvuichoi/khosach",
          children: [
            {
              id: 1001,
              idParent: 100,
              label: "Sách văn học",
              path: "/dvkhuvuichoi/khosach/sachvanhoc",
            },
            {
              id: 1002,
              idParent: 100,
              label: "Truyện thiếu nhi",
              path: "/dvkhuvuichoi/khosach/truyenthieunhi",
            },
          ],
        },
        {
          id: 101,
          idParent: 5,
          label: "Lưu trữ",
          path: "/dvkhuvuichoi/luutru",
        },
      ],
    },
    { id: 6, label: "Tuyển dụng", path: "/tuyendung" },
    { id: 7, label: "Liên hệ", path: "/lienhe" },
  ],
  accountUser: [
    {
      id: "user1",
      name: "Nguyen Van A",
      email: "nguyenvana@gmail.com",
      password: "123456",
    },
    {
      id: "user2",
      name: "Nguyen Van B",
      email: "nguyenvanb@gmail.com",
      password: "123456",
    },
  ],
  dataComic: [
    {
      id: "comic1",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/nhan-chia.jpg?v=1594633353000",
      name: "Doraemon Học tập - Nhân Chia",
      price: "70000",
      type: "Truyện tranh",
    },
    {
      id: "comic2",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/image-195509-1-2167.jpg?v=1594693655880",
      name: "Doraemon Chọn Lọc - 45 Chương",
      price: "30000",
      type: "Truyện tranh",
    },
    {
      id: "comic3",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/lam-quen-voi-bieu-do.jpg?v=1594635213000",
      name: "Doraemon Học tập - Làm quen với biểu đồ",
      price: "30000",
      type: "Truyện tranh",
    },
    {
      id: "comic4",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/cung-lam-hoa-si.jpg?v=1594693956313",
      name: "Doraemon Học tập - Cùng làm họa sĩ",
      price: "30000",
      type: "Truyện tranh",
    },
    {
      id: "comic5",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/cac-dang-toan-nang-cao-q1.jpg?v=1594632714000",
      name: "Doraemon Học tập - Các dạng toán nâng cao",
      price: "50000",
      type: "Truyện tranh",
    },
    {
      id: "comic6",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/nhung-bai-toan-thuong-gap.jpg?v=1594634703000",
      name: "Doraemon Học tập - Những bài toán thường gặp",
      price: "30000",
      type: "Truyện tranh",
    },
    {
      id: "comic7",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/image-195509-1-12294.jpg?v=1594705276000",
      name: "Doraemon Học tập - Điện năng - Âm thanh _ Ánh sáng",
      price: "30000",
      type: "Truyện tranh",
    },
    {
      id: "comic8",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/dien-nang.jpg?v=1594634283000",
      name: "Doraemon - Đại chiến thuật côn trùng",
      price: "40000",
      type: "Truyện tranh",
    },
  ],

  dataBag: [
    {
      id: "bag1",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/img-7301-optimized.jpg?v=1597312896000",
      name: "Bao lô nàng tiên cá",
      price: "399000",
    },
    {
      id: "bag2",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/img-7190.jpg?v=1597311587467",
      name: "Cặp học sinh VBag D3297",
      price: "170000",
    },
    {
      id: "bag3",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/img-7201.jpg?v=1597311328000",
      name: "Cặp học sinh VBag N1897",
      price: "160000",
    },
    {
      id: "bag4",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/img-7205.jpg?v=1597311099000",
      name: "Cặp học sinh VBag VC1011",
      price: "170000",
    },
    {
      id: "bag5",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/img-7175.jpg?v=1596945709000",
      name: "Cặp học sinh VBag VC 1006",
      price: "170000",
    },
    {
      id: "bag6",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/img-7118-78456aa6-5493-47ac-85b4-55bb35ea70c2.jpg?v=1596881551807",
      name: "Cặp học sinh VBag VC 1018",
      price: "170.000",
    },
    {
      id: "bag7",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/img-7126.jpg?v=1596881246000",
      name: "Cặp học sinh VBag VC 261",
      price: "230.000",
    },
    {
      id: "bag8",
      img: "https://bizweb.dktcdn.net/thumb/large/100/386/441/products/d80648c4be0b00a85ea5ca3e9efff718.jpg?v=1592547951000",
      name: "Thước không gãy 15cm",
      price: "10.000",
    },
  ],

  dataCartItems: [],
};

function reducer(state, action) {
  switch (action.type) {
    // case SET_TODO_INPUT:
    //   return {
    //     ...state,
    //     todo: action.payload,
    //   };
    case ADD_A_NEW_ACCOUNT:
      return {
        ...state,
        accountUser: action.payload,
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        dataCartItems: [...state.dataCartItems, action.payload],
      };
    case REMOVE_A_CART_ITEM:
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
