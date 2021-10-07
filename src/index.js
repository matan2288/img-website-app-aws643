import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalDataWrapper } from "./GlobalData/Context.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalDataWrapper>
      
      <App />


    </GlobalDataWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
