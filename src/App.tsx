import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./routes";
import {useSelector} from "react-redux";
import type {RootState} from "./store/store";

function App() {
  const title = useSelector((state: RootState) => state.ruralProducerReducer.title);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Brain Ag - {title}</h1>
      </header>

      <div className="app-content">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
