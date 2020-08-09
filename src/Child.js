import React, { useContext } from "react";
import { UserContext } from "./App";

const Child = () => {
  const user = useContext(UserContext);
  return (
    <div>
      {user.name}
      {user.age}
    </div>
  );
};

export default Child;
