import React from "react";

import loginIcon from "../../images/icons/open.svg";

function Login() {
  return (
    <div id="login">
      <div className="title">
        <h1>Login</h1>
      </div>
      <form>
        <input type="Name" name="name" placeholder="Your username" />
        <input type="Password" name="name" placeholder="Password" />
        <button className="button send">
          <span>Login</span>
          <img src={loginIcon} alt="arrow-send" />
        </button>
      </form>
    </div>
  );
}

export default Login;
