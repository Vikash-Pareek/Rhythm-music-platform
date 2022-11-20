import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
// import { store } from "./redux/store";

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <App />
    </Router>
    {/* </Provider> */}
  </React.StrictMode>
);
