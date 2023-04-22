import React from "react";
import "./App.css";
import TableElement from "./components/Table";
const arrayComponent = React.createContext();
function App() {
  return (
    <arrayComponent.Provider value={[]}>
      <TableElement />
    </arrayComponent.Provider>
  );
}

export default App;
