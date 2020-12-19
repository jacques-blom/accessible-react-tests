import * as React from "react";
import "./styles.scss";
import { Heading } from "./Heading";
import { Task } from "./Task";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Task />
    </div>
  );
}
