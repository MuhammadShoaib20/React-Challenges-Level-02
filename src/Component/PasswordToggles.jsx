import React, { useState } from "react";

const PasswordToggles = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordHandle = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <h1>Show/Hide Password</h1>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Your Password"
      />
      <br />

      <button onClick={PasswordHandle}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
};
export default PasswordToggles;
