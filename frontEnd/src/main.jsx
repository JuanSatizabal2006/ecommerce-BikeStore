import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";

import { App } from "./app.jsx";
//import { NavBar } from "./components/allNavBar/navBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);