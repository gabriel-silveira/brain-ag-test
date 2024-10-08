import React from 'react';
import {useNavigate} from "react-router-dom";
import RuralProducerTableRow from "./row";
import RuralProducersDashboard from "../../dashboards/rural-producers";
import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store";

function RuralProducersTable() {
  const navigate = useNavigate();
  const ruralProducers = useSelector((state: RootState) => state.ruralProducerReducer.ruralProducers);

  const goCreatePage = () => navigate('/create');

  return (
    <div>
      <button
        className="flex justify-center rounded-md bg-indigo-600 font-semibold px-3 py-1.5
            leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-indigo-600 create-button"
        onClick={() => goCreatePage()}
      >
        Cadastrar
      </button>

      <div>
        {ruralProducers.length ? (
          <div>
            <RuralProducersDashboard/>

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
                <th className="px-4 py-2">Editar</th>
                <th className="px-4 py-2">Excluir</th>
              </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
              {ruralProducers.map((ruralProducer, index) => RuralProducerTableRow(ruralProducer, index))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="inline-info">Nenhum produtor rural cadastrado</div>
        )}
      </div>
    </div>
  );
}

export default RuralProducersTable;
