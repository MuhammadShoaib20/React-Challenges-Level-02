import React from "react";
import "./App.css";

const ReusableButton = ({ label, onClick }) => {
  return (
    <div>
      <button style={{textAlign:"center"}} className="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};
export default ReusableButton;
