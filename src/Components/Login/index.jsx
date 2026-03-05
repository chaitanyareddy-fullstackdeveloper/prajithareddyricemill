import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import "./index.css";
import Home from "../Home";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const storeUserName = (event) => {
    setUserName(event.target.value);
  };

  const storePassword = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = (event) => {
    event.preventDefault();  // prevent page reload
    const authTokenData=userName+'123456' 
    Cookies.set("auth_token",JSON.stringify({authTokenData},{ expires: 1 }))
    navigate("/", { replace: true });

  };

  const authToken = Cookies.get("auth_token")
  if (authToken){
    return (
     <Navigate to='/'/>
    )
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={loginUser}>
        
        <h2 className="title">Login</h2>

        <p className="dev-text">
          Currently the Project is under <strong>Development</strong>.
          You can choose any username and password to login and Your Data wont be stored.
        </p>

        <div className="input-group">
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={storeUserName}
            placeholder="Enter your username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={storePassword}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;