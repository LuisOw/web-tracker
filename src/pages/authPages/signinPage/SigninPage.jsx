import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/auth";

import "../AuthPages.css";

const SigninPage = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const nameInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUsername = usernameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    console.log("submit ", { enteredUsername, enteredPassword });
    signin(enteredUsername, enteredPassword, enteredName);
  };

  return (
    <div className="box">
      <h1>Criação de conta</h1>
      <form className="form" onSubmit={submitHandler}>
        <input
          className="credentials"
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          ref={nameInputRef}
        />
        <input
          className="credentials"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          ref={usernameInputRef}
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
          Criar
        </button>
      </form>
      <button className="button button_view" onClick={() => navigate("/login")}>
        Login
      </button>
    </div>
  );
};

export default SigninPage;
