import React from "react";
import "./App.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <section className="login">
      <div className="loginContainer">
        <h1 className="">Geo Locater</h1>
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="errorMsg">{emailError} </p>

        <label>Password</label>
        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError} </p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}> Log In </button>
              <p>
                Dont have an Account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}> Sign Up</button>
              <p>
                Have an Account?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Log In</span>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
