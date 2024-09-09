import React from 'react';
import {PencilIcon, TrashIcon} from "@heroicons/react/24/solid";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CropPlanted from "./crop-planted";
import {IRuralProducer} from "../../../_interfaces/rural_producer";
import {setDeleteIndex, setRuralProducer} from "../../../store/rural-producer/slice";

function RuralProducerTableRow(ruralProducer: IRuralProducer, index: number) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {ruralProducers}: {
    ruralProducers: IRuralProducer[]
    // @ts-ignore
  } = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  function startEditing() {
    dispatch(setRuralProducer({...ruralProducers[index]}));

    navigate(`/edit/${index + 1}`);
  }

  function setRemoveIndexAndOpenDialog() {
    dispatch(setDeleteIndex(index));
  }

  return (
    <tr key={index} className="hover:bg-slate-100 cursor-pointer odd:bg-white even:bg-slate-50">
      <td className="px-4 py-2">{ruralProducer.document}</td>
      <td className="px-4 py-2">{ruralProducer.producer_name}</td>
      <td className="px-4 py-2">{ruralProducer.farm_name}</td>
      <td className="px-4 py-2">{ruralProducer.city}</td>
      <td className="px-4 py-2">{ruralProducer.state}</td>
      <td className="px-4 py-2 text-center">{ruralProducer.farm_area}</td>
      <td className="px-4 py-2 text-center">{ruralProducer.arable_area}</td>
      <td className="px-4 py-2 text-center">{ruralProducer.vegetation_area}</td>
      <td className="px-4 py-2">
        {ruralProducer.crops_planted.map((crop_planted, index) => (
          <CropPlanted
            key={index}
            value={crop_planted}
            index={index}
          />
        ))}
      </td>
      <td className="px-4 py-2">
        <div className="grid justify-items-center">
          <PencilIcon
            className="size-5 icon-button mr-2"
            onClick={() => startEditing()}
          />
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="grid justify-items-center">
          <TrashIcon
            className="size-5 icon-button"
            onClick={() => setRemoveIndexAndOpenDialog()}
          />
        </div>
      </td>
    </tr>
  )
}

export default RuralProducerTableRow;
