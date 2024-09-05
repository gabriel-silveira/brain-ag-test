import React from 'react';
import {IRuralProducer} from "../../../_interfaces/rural_producer";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { PencilIcon } from '@heroicons/react/24/solid';
import {setRuralProducer} from "../../../store/rural-producer/actions";

function RuralProducersTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          <th className="px-4 py-2 text-start">Área da fazenda</th>
          <th className="px-4 py-2 text-start">Área agric.</th>
          <th className="px-4 py-2 text-start">Área de veg.</th>
          <th className="px-4 py-2 text-start">Culturas plant.</th>
          <th className="px-4 py-2 text-start">Ações</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white text-slate-800">
        {ruralProducers.map(RuralProducersTableRow)}
        </tbody>
      </table>
    </div>
  );

  function RuralProducersTableRow(ruralProducer: IRuralProducer, index: number) {
    const startEditing = () => {
      dispatch(setRuralProducer({ ...ruralProducers[index] }));

      navigate(`/edit/${index + 1}`);
    };

    return (
      <tr key={index} className="hover:bg-slate-100 cursor-pointer odd:bg-white even:bg-slate-50">
        <td className="px-4 py-2">{ruralProducer.document}</td>
        <td className="px-4 py-2">{ruralProducer.producer_name}</td>
        <td className="px-4 py-2">{ruralProducer.farm_name}</td>
        <td className="px-4 py-2">{ruralProducer.city}</td>
        <td className="px-4 py-2">{ruralProducer.state}</td>
        <td className="px-4 py-2">{ruralProducer.farm_area}</td>
        <td className="px-4 py-2">{ruralProducer.arable_area}</td>
        <td className="px-4 py-2">{ruralProducer.vegetation_area}</td>
        <td className="px-4 py-2">
          {ruralProducer.crops_planted.map(CropPlanted)}
        </td>
        <td className="px-4 py-2">
          <PencilIcon className="size-5 icon-button" onClick={startEditing} />
        </td>
      </tr>
    )
  }

  function CropPlanted(value: string, index: number) {
    return (
      <span
        className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-1"
        key={index}
      >
      {value}
    </span>
    )
  }
}

export default RuralProducersTable;
