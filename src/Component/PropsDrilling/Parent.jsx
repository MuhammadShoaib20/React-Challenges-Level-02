import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("Hello Shoaib");

  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Props Drilling </h1>
      <h3>Parent Component</h3>
      <Child message={message} />
    </div>
  );
};
export default Parent;
