import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AudioProps from "./context/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioProps>
    <App />
  </AudioProps>
);
