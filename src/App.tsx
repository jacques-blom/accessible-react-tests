import * as React from "react";
import "./styles.scss";
import { Heading } from "./Heading";
// import { Task } from "./not-accessible/Task";
import { Task } from "./accessible/Task";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Task />
    </div>
  );
}
