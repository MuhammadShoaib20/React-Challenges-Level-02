import React from "react";
import GrandChild from "./GrandChild";

const Child = ({ message }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <GrandChild message={message} />
    </div>
  );
};
export default Child;
