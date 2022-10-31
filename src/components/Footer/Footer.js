import "./Footer.scss";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_social_media">
          <img
            src="https://bizweb.dktcdn.net/100/386/441/themes/869880/assets/logo.png?1658716179964"
            alt=""
          />
          <p>
            Nhà sách Tiến Thọ là tổ hợp mua sắm - giải trí rộng 2500m2, vừa là
            nơi để mọi người thỏa mãn bản thân, vừa là không gian giải phong cảm
            xúc cá nhân.
          </p>
          <div className="footer_social_icon">
            <span className="icon">
              <i className="fa fa-facebook" />
            </span>
            <span className="icon">
              <i className="fa fa-twitter" />
            </span>
            <span className="icon">
              <i className="fa fa-youtube-play" />
            </span>
            <span className="icon">
              <i className="fa fa-instagram" />
            </span>
          </div>
        </div>
        <div className="footer_hot_link">
          <h4>Liên kết nhanh</h4>
          <p>Kho sách</p>
          <p>Sách tham khỏa</p>
          <p>Dụng cụ học tập</p>
          <p>Văn phòng phẩm</p>
          <p>Đồ chơi</p>
          <p>Lịch tết</p>
          <p>Quà tặng & sự kiện</p>
        </div>
        <div className="footer_contact">
          <h4>Thông tin liên kết</h4>
          <p>
            <strong>Địa chỉ</strong>:Cơ sở 1: 828 Đường Láng - Đống Đa - Hà Nội
          </p>
          <p>
            <i className="fa fa-phone" />
            Hotline: 094.1234.828
          </p>
          <p>Cơ sở 2: 36 Xuân Thủy - Cầu Giấy - Hà Nội</p>
          <p>
            <i className="fa fa-phone" />
            Hotline: 093.417.3636
          </p>
          <p>
            <strong>Email</strong>:tienthobook@gmail.com
          </p>
        </div>
      </div>
      <div className="footer_copyright">
        <p>
          &copy;Bản quyền thuộc về <strong>Nhà sách tiến thọ </strong>| Cung cấp
          bởi Sapo
        </p>
      </div>
    </div>
  );
}

export default Footer;
