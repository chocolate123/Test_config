import React from "react";
import ReactDom from "react-dom";
import App from "./component/App";
ReactDom.render(
  <div>
    <App></App>
  </div>
  , //挂载点
  document.querySelector("#app")
)