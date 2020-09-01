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
        <h1>
          <i class="fa fa-map" aria-hidden="true"></i> Geo Locater{" "}
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </h1>
        <label>
          <i class="fa fa-envelope" aria-hidden="true"></i> Email
        </label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="errorMsg">{emailError} </p>

        <label>
          {" "}
          <i class="fa fa-key" aria-hidden="true"></i> Password
        </label>
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
