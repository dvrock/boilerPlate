import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "./Store/store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode>  */}
  
      <Router>
        <App />
      </Router>
   
    <ToastContainer autoClose={2000} />
    {/* </React.StrictMode> */}
  </Provider>
);