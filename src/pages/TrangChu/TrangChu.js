import DSDungCuHocTap from "../../components/DSDungCuHocTap/DSDungCuHocTap";
import DSTruyenTranh from "../../components/DSTruyenTranh/DSTruyenTranh";
import SanPhamBanChay from "../../components/SanPhamBanChay/SanPhamBanChay";
import "./TrangChu.scss";

function TrangChu() {
  return (
    <div className="trangchu__container">
      <div className="trangchu__banner"></div>
      <SanPhamBanChay />
      <DSTruyenTranh />
      <DSDungCuHocTap />
    </div>
  );
}

export default TrangChu;
