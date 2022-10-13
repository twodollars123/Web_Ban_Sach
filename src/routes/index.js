import TrangChu from "../pages/TrangChu/TrangChu";
import DangNhap from "../pages/DangNhap/DangNhap";

const publicRoutes = [
  { path: "/", component: TrangChu },
  { path: "/dangnhap", component: DangNhap },
];

export { publicRoutes };
