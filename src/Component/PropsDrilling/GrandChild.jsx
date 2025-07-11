import React from "react";

const GrandChild = ({ message }) => {
  return (
    <div>
      <h3>GrandChild Component </h3>
      <p style={{ backgroundColor: "brown", fontWeight: "bolder" }}>
        GrandChild Say : {message}
      </p>
    </div>
  );
};
export default GrandChild;
