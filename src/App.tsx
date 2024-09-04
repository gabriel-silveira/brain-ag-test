import React from 'react';
import './App.css';
import RuralProducersPage from "./pages/rural-producers";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Cadastro de produtores rurais</h1>
      </header>

      <div className="app-content">
        <RuralProducersPage/>
      </div>
    </div>
  );
}

export default App;
