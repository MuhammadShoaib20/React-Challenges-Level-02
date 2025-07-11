import React, { useState } from "react";
import "./App.css";

const SimpleLogin = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("Shoaib");

  const Checklogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <h1>Greeting - Message</h1>
      {isLogin ? <p>Welcome , back {userName}</p> : <p>Please Login </p>},
      <button
        onClick={Checklogin}
        className={isLogin ? `btn-Dark` : `btn-Light`}
      >
        {isLogin ? "LogOut" : "LogIn"}
      </button>
    </div>
  );
};
export default SimpleLogin;
