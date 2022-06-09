import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/auth";

import "../AuthPages.css";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log("submit ", { enteredEmail, enteredPassword });
    login(enteredEmail, enteredPassword);
  };

  return (
    <div className="box">
      <h1>Login do sistema</h1>
      <form className="form" onSubmit={submitHandler}>
        <input
          className="credentials"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          ref={emailInputRef}
        />
        <input
          className="credentials"
          type="password"
          name="password"
          id="password"
          placeholder="Senha"
          ref={passwordInputRef}
        />
        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
      <button className="button button_view" onClick={() => navigate("/")}>
        Criar conta
      </button>
      <br />
    </div>
  );
};

export default LoginPage;
