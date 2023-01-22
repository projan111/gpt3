import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

//Previous Version
ReactDOM.render(<App />, document.getElementById("root"));

//Latest Version
// import { createRoot } from "react-dom/client";
// const container = document.getElementById("app");
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App />);
