import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { GlobalStyle } from "./gobal.style";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle dark />
    <App />
  </React.Fragment>,
  document.getElementById("root")
);
