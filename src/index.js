import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Gallery.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // possible to modify the CSS by deactivating bootstrap
import "./custom.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

// to start measuring performance in the app, pass a function to log results (for example: reportWebVitals(console.log)) or send to an analytics endpoint. For more: https://bit.ly/CRA-vitals
