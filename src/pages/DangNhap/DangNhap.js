import { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import * as ApiServices from "../../ApiServices";
import "./DangNhap.scss";
import notify from "../../ultis/notify";
import { useStore,actions } from "../../store";

function DangNhap() {
  const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState(null);
  const [passUser, setPassUser] = useState(null);

  const [state,dispatch] = useStore()

  const handleLogin = async () => {
    if (emailUser && passUser) {
      const data = {
        identifier: emailUser,
        password: passUser,
      };
      await ApiServices.login(data)
        .then(async(res) => {
          if(res?.jwt&&res?.user){
            localStorage.setItem('token',res.jwt);
            localStorage.setItem('user',res.user);
            dispatch(actions.setAuth(true));
            await notify("success", "Welcome");
            setTimeout(() => {
              navigate("../");
            }, 3000);
          }else{
            notify("error", "Email or Password was wrong");
          }
        })
        .catch((err) => {
          notify("error", "Something was wrong");
        });
    } else {
      notify("error", "You need fill all fields");
    }
  };

  return (
    <>
      {/* {loginStatus ? <>{redirect()}</>} */}
      <div className="login_container">
        {/* <div className="breadcrumb">
          <p>Trang chủ</p>
          &#47;
          <p>Đăng nhập</p>
        </div> */}
        <div className="login_head">
          <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
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
        <div className="login_main">
          <form className="form" id="form1">
            <div className="group-form">
              <label className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="eg.tuan@gmail.com"
                onChange={(e) => setEmailUser(e.target.value)}
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
                onChange={(e) => setPassUser(e.target.value)}
              />
              <span className="form-message"></span>
            </div>
          </form>
          <p>Quên mật khẩu?</p>
        </div>
        <div className="login_bot">
          <button onClick={handleLogin}>Đăng nhập</button>
          <p>
            Nhà sách Tiến Thọ cam kết bảo mật và sẽ không bao giờ đăng hay chia
            sẻ thông tin mà chưa được sự đồng ý của bạn
          </p>
          <p>
            Bạn chưa có tài khoản. Đăng ký <Link to="/dangky">Tại đây</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default DangNhap;
