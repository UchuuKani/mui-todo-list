import React from "react";

import logo from "./logo.svg";
import "./App.css";

import ButtonAppBar from "./components/common/NavBar";
import Typography from "@material-ui/core/Typography";

import TodoListContainer from "./components/TodoListContainer";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Typography variant="h2">TODO List</Typography>
      <TodoListContainer />
    </div>
  );
}

export default App;
