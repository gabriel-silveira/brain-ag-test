import React, {useState} from 'react';
import {setRuralProducer} from "../../../store/rural-producer/actions";
import {PencilIcon, TrashIcon} from "@heroicons/react/24/solid";
import {useDispatch, useSelector} from "react-redux";
import {IRuralProducer} from "../../../_interfaces/rural_producer";
import {useNavigate} from "react-router-dom";
import CropPlanted from "./crop-planted";
import RemoveRuralProducerDialog from "../../dialogs/rural-producer/remove";

function RuralProducerTableRow(ruralProducer: IRuralProducer, index: number) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    showRemoveDialog: false,
  });

  // @ts-ignore
  const {ruralProducers} = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  const startEditing = () => {
    dispatch(setRuralProducer({ ...ruralProducers[index] }));


    navigate(`/edit/${index + 1}`);
  };

  const startRemoving = (value: boolean) => {
    setData((prev) => ({showRemoveDialog: value}));
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
        {ruralProducer.crops_planted.map(CropPlanted)}
      </td>
      <td className="px-4 py-2">
        <PencilIcon
          className="size-5 icon-button float-left mr-2"
          onClick={startEditing} />

        <TrashIcon
          className="size-5 icon-button"
          onClick={() => startRemoving(true)}
        />

        <RemoveRuralProducerDialog
          visible={data.showRemoveDialog}
          onClose={() => startRemoving(false)}
        />
      </td>
    </tr>
  )
}

export default RuralProducerTableRow;
