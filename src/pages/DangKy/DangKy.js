import { Link } from "react-router-dom";
import { useState } from "react";
import "./DangKy.scss";
import { v4 as uuidv4 } from "uuid";
import { useStore, actions } from "../../store";

function Dangky() {
  const [state, dispath] = useStore();
  const { accountUser } = state;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const handleRegister = () => {
    let newAccount = {
      id: uuidv4(),
      name: name,
      email: email,
      password: pass,
    };
    let newAccountUsers = [...accountUser];
    newAccountUsers.push(newAccount);

    dispath(actions.addANewAccount(newAccountUsers));
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
          />
          <span className="form-message"></span>
        </div>

        <button className="form-submit" onClick={handleRegister}>
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
