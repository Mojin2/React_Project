import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault(); //새로고침 방지
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      navigate("/");
    });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login_container">
        <h1>로그인</h1>
        <form>
          <h5>이메일</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="이메일"
          />
          <h5>비밀번호</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호"
          />
          <button onClick={signIn} className="login_signInButton">
            로그인
          </button>
        </form>

        <p>이용 약관에 동의하십니까?</p>
        <button onClick={register} className="login_registerButton">
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
