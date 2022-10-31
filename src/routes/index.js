import TrangChu from "../pages/TrangChu/TrangChu";
import DangNhap from "../pages/DangNhap/DangNhap";
import Dangky from "../pages/DangKy/DangKy";
import GioHang from "../pages/GioHang/GioHang";

const publicRoutes = [
  { path: "/", component: TrangChu },
  { path: "/dangnhap", component: DangNhap },
  { path: "/dangky", component: Dangky },
  { path: "/giohang", component: GioHang },
];

export { publicRoutes };
