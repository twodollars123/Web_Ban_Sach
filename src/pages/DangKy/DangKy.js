import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./DangKy.scss";
import * as ApiServices from "../../ApiServices";
import notify from "../../ultis/notify";

function Dangky() {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [repass, setRePass] = useState(null);

  const handleRegister = async () => {
    if (repass === pass && email && name) {
      let newAccount = {
        name: name,
        email: email,
        password: pass,
      };
      await ApiServices.register(newAccount)
        .then(() => {
          notify("success", "Success");
          setTimeout(() => {
            navigate("../dangnhap");
          }, 3000);
        })
        .catch((err) => {
          console.log("err", err);
        });
    } else {
      notify("error", "Something was wrong!");
    }
  };
  return (
    <div className="dangky_main">
      <form className="form" id="form1">
        <div className="login_head">
          <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
          <div className="login_social">
            <div className="login_social social_item">
              <i className="fa fa-facebook-f" />
              <p>Facebook</p>
            </div>
            <div className="login_social social_item">
              <i className="fa fa-google-plus" />
              <p>Google</p>
            </div>
          </div>
        </div>

        <div className="group-form">
          <label className="form-label">Tên đầy đủ</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="eg.Nguyễn Văn Tuấn"
            onChange={(e) => setName(e.target.value)}
          />
          <span className="form-message"></span>
        </div>

        <div className="group-form">
          <label className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="eg.tuan@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="form-message"></span>
        </div>

        <div className="group-form">
          <label className="form-label">Mật khẩu</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Nhập mật khẩu"
            onChange={(e) => setPass(e.target.value)}
          />
          <span className="form-message"></span>
        </div>

        <div className="group-form">
          <label className="form-label">Nhập lại mật khẩu</label>
          <input
            type="password"
            id="repassword"
            name="repassword"
            placeholder="Nhập lại mật khẩu"
            onChange={(e) => setRePass(e.target.value)}
          />
          <span className="form-message"></span>
        </div>

        <button className="form-submit" type="button" onClick={handleRegister}>
          Đăng kí
        </button>
        <p className="todangnhap">
          Đăng nhập <Link to="/dangnhap">Tại đây</Link>
        </p>
      </form>
    </div>
  );
}

export default Dangky;
