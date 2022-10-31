import { Link } from "react-router-dom";
import "./SanPhamBanChay.scss";

function SanPhamBanChay() {
  return (
    <div className="bestseller__container">
      <Link to="#" className="bestseller__title__link">
        Sản phẩm bán chạy
      </Link>
      <div className="bestseller__content">
        <strong>Sản phảm bán chạy! </strong>Đang được cập nhập
      </div>
    </div>
  );
}

export default SanPhamBanChay;
