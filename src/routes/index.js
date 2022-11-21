import TrangChu from "../pages/TrangChu/TrangChu";
import DangNhap from "../pages/DangNhap/DangNhap";
import Dangky from "../pages/DangKy/DangKy";
import GioHang from "../pages/GioHang/GioHang";
import Category from "../pages/Category";
import Payment from "../pages/Payment";
import User from "../pages/User";
import Detail from "../pages/Detail";

const publicRoutes = [
  { path: "/", component: TrangChu },
  { path: "/dangnhap", component: DangNhap },
  { path: "/dangky", component: Dangky },
  { path: "/giohang", component: GioHang },
  { path: "/category", component: Category, param:'idCategory' },
  { path: "/product", component: Detail, param:'idPrd' },
  { path: "/payment", component: Payment },
  { path: "/user", component: User, param:'idUser' },
];

export { publicRoutes };
