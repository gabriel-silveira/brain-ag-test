import React from 'react';
import ruralProducersList from '../../../_data/rural-producers.json';
import {IRuralProducer} from "../../../_interfaces/rural_producer";
import {useNavigate} from "react-router-dom";

function RuralProducersTable() {
  const navigate = useNavigate();

  const goCreatePage = () => navigate('/create');

  return (
    <div>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold
          py-2 px-4 border border-gray-400 rounded shadow create-button"
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
          <th className="px-4 py-2 text-start">Área da fazenda</th>
          <th className="px-4 py-2 text-start">Área agric.</th>
          <th className="px-4 py-2 text-start">Área de veg.</th>
          <th className="px-4 py-2 text-start">Culturas plant.</th>
          <th className="px-4 py-2 text-start">Ações</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
        {ruralProducersList.map(RuralProducersTableRow)}
        </tbody>
      </table>
    </div>
  )
}

function RuralProducersTableRow(ruralProducer: IRuralProducer) {
  return (
    <tr className="hover:bg-slate-100 cursor-pointer odd:bg-white even:bg-slate-50">
      <td className="px-4 py-2">{ruralProducer.document}</td>
      <td className="px-4 py-2">{ruralProducer.producer_name}</td>
      <td className="px-4 py-2">{ruralProducer.farm_name}</td>
      <td className="px-4 py-2">{ruralProducer.city}</td>
      <td className="px-4 py-2">{ruralProducer.state}</td>
      <td className="px-4 py-2">{ruralProducer.farm_area}</td>
      <td className="px-4 py-2">{ruralProducer.arable_area}</td>
      <td className="px-4 py-2">{ruralProducer.vegetation_area}</td>
      <td className="px-4 py-2">...</td>
      <td className="px-4 py-2"></td>
    </tr>
  )
}

export default RuralProducersTable;
