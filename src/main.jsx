import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GifContext, GifContextProvider } from "./context/GifContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifContextProvider>
      <App />
    </GifContextProvider>
  </React.StrictMode>
);
