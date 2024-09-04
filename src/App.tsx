import React from 'react';
import './App.css';
import RuralProducersPage from "./pages/rural-producers";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Cadastro de produtores rurais</h1>

        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold
          py-2 px-4 border border-gray-400 rounded shadow create-button">
          Cadastrar
        </button>
      </header>

      <div className="app-content">
        <RuralProducersPage/>
      </div>
    </div>
  );
}

export default App;
