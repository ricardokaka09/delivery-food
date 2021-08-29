import React from "react";
import ViewButton from "../../components/ViewButton";
import loginfb from "../../style/img/login-fb.png";
import logingg from "../../style/img/login_gg.png";

const Login = () => {
  return (
    <section className="login">
      <div className="login__form">
        <h3 className="login__form-title">Login</h3>
        <div className="login__form__email">
          <input type="text" id="email" placeholder="user@gmail.com" />
          <label className="forEmail" htmlFor="email">
            Email
          </label>
        </div>
        <div className="login__form__pass">
          <input type="password" id="pass" placeholder="***********" />
          <label className="forPass" htmlFor="pass">
            Password
          </label>
        </div>
        <ViewButton
          type="viewButton__btn viewButton__btn-orderDetail"
          title="Login"
        />
        <p className="login__form__passForget">Forget Pass</p>
        <div className="login__form-br">
          <div className="login__form-br-1"></div>
          <p className="login__form-br-2">OR</p>
          <div className="login__form-br-1"></div>
        </div>

        <div className="login__form-oauth">
          <img src={loginfb} alt="" />
          <img src={logingg} alt="" />
        </div>
        <div className="login__form-register">
          You haven't account? <a href="#">Create account</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
