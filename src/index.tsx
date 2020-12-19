import * as React from "react";
import { render } from "react-dom";
import { QueryParamProvider } from "use-query-params";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <QueryParamProvider>
    <App />
  </QueryParamProvider>,
  rootElement
);
