import React from 'react';
import ruralProducersList from '../../../_data/rural-producers.json';
import {IRuralProducer} from "../../../_interfaces/rural_producer";

function RuralProducersTable() {
  return (
    <table
      className="w-full divide-y divide-slate-200 round-grey-border"
    >
      <thead className="bg-lighter-grey text-slate-800">
      <tr>
        <th className="px-4 py-2 text-start">CPF / CNPJ</th>
        <th className="px-4 py-2 text-start">Nome do produtor</th>
        <th className="px-4 py-2 text-start">Nome da Fazenda</th>
        <th className="px-4 py-2 text-start">Cidade</th>
        <th className="px-4 py-2 text-start">Estado</th>
        <th className="px-4 py-2 text-start">Área total da fazenda</th>
        <th className="px-4 py-2 text-start">Área agricultável</th>
        <th className="px-4 py-2 text-start">Área de vegetação </th>
        <th className="px-4 py-2 text-start">Culturas plantadas</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
      {ruralProducersList.map(RuralProducersTableRow)}
      </tbody>
    </table>
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
      <td className="px-4 py-2">Row</td>
    </tr>
  )
}

export default RuralProducersTable;
