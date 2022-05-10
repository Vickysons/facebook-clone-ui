import React from "react";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="main_page">
        <div className="login_container">
          <div className="FB_heading">
            <h1>facebook</h1>
            <p>
              Facebook helps you connect and share with people in your life.
            </p>
          </div>
          <form className="login_page">
            <div className="signIn_side">
              <input
                type="text"
                name=""
                id="mail"
                placeholder="Email address or phone number"
                className="input"
              />
              <input
                type="password"
                name=""
                id="pass"
                placeholder="Password"
                className="input"
              />
              <input type="submit" value="Log In" id="log" className="input" />
              <input
                type="button"
                value="forgotten password"
                id="for"
                className="input"
              />
              <input
                type="button"
                value="Create New Account"
                id="cna"
                className="input"
              />
            </div>
            <p>
              <span id="big">Create a page</span> for celebrity, brand or
              business.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
