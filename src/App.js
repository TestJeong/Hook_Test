import React, { createContext } from "react";
import "./App.css";
import Child from "./Child";

export const UserContext = createContext();
const user = { name: "YUN", age: 27 };

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <Child />
      </UserContext.Provider>
    </div>
  );
}

export default App;
