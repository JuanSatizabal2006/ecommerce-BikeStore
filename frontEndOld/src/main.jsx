import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.css";

import { ThemeProvider } from "@material-tailwind/react";

import { App } from "./app.jsx";
import CarruselHome from "./sections/usuario/home/carruselHome.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <CarruselHome />
        </ThemeProvider>
    </StrictMode>
);