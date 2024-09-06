import React from 'react';
import './App.css';
import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Brain Ag - Produtores rurais</h1>
      </header>

      <div className="app-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
