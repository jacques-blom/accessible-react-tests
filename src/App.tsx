import * as React from "react";
import "./styles.scss";
import { Heading } from "./Heading";
import { Task as NotAccessibleTask } from "./not-accessible/Task";
import { Task as AccessibleTask } from "./accessible/Task";
import { BooleanParam, useQueryParam } from "use-query-params";

export default function App() {
  const [accessible] = useQueryParam("accessible", BooleanParam);

  return (
    <div className="App">
      <Heading />
      {accessible ? <AccessibleTask /> : <NotAccessibleTask />}
    </div>
  );
}
