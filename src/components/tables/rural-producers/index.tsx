import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import RuralProducerTableRow from "./row";

function RuralProducersTable() {
  const navigate = useNavigate();

  const goCreatePage = () => navigate('/create');

  // @ts-ignore
  const {ruralProducers} = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  return (
    <div>
      <button
        className="flex justify-center rounded-md bg-indigo-600 font-semibold px-3 py-1.5
            leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-indigo-600 create-button"
        onClick={goCreatePage}
      >
        Cadastrar
      </button>

      <table
        className="w-full divide-y divide-slate-200 round-grey-border table-small-font"
      >
        <thead className="bg-lighter-grey text-slate-800">
        <tr>
          <th className="px-4 py-2 text-start">CPF / CNPJ</th>
          <th className="px-4 py-2 text-start">Nome do produtor</th>
          <th className="px-4 py-2 text-start">Nome da fazenda</th>
          <th className="px-4 py-2 text-start">Cidade</th>
          <th className="px-4 py-2 text-start">Estado</th>
          <th className="px-4 py-2">Área da fazenda</th>
          <th className="px-4 py-2">Área agric.</th>
          <th className="px-4 py-2">Área de veg.</th>
          <th className="px-4 py-2 text-start">Culturas plant.</th>
          <th className="px-4 py-2 text-start pl-5">Ações</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
        {ruralProducers.map(RuralProducerTableRow)}
        </tbody>
      </table>
    </div>
  );
}

export default RuralProducersTable;
