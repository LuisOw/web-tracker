import { useRef, useContext } from "react";

import { AuthContext } from "../../../context/auth";

import "../AuthPages.css";

const SigninPage = () => {
  const { signin } = useContext(AuthContext);

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
    <div id="login">
      <h1 className="title">Criação de conta</h1>
      <form className="form" onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor="text">Nome completo</label>
          <input type="text" name="name" id="name" ref={nameInputRef} />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" ref={usernameInputRef} />
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className="actions">
          <button type="submit">Criar</button>
        </div>
      </form>
    </div>
  );
};

export default SigninPage;
