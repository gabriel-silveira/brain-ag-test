import React from 'react';
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";
import {IRuralProducer} from "../../../_interfaces/rural_producer";
import {useDispatch, useSelector} from "react-redux";
import {updateRuralProducer} from "../../../store/rural-producer/actions";

function RemoveRuralProducerAlt(props: {
  ruralProducer: IRuralProducer,
  deleteIndex: number,
  onConfirm: () => void,
}) {
  const { ruralProducer, deleteIndex, onConfirm } = props;

  const dispatch = useDispatch();

  const {ruralProducers}: {
    ruralProducers: IRuralProducer[],
    // @ts-ignore
  } = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  function remove() {
    const updatedRuralProducers: IRuralProducer[] = [];

    let i = 0;

    for (const currentRuralProducer of ruralProducers) {
      if (i !== deleteIndex) {
        updatedRuralProducers.push(currentRuralProducer);
      }

      i += 1;
    }

    console.log(updatedRuralProducers);

    dispatch(updateRuralProducer([...updatedRuralProducers]));
  }

  return (
    <div id="remove-dialog-overlay">
      <div id="remove-dialog">
        <div
          className="remove-dialog-exclamation-mark mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600"/>
        </div>

        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <div className="text-base font-semibold leading-6 text-gray-900">
            Excluir produtor rural
          </div>
          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Tem certeza que deseja excluir os dados do produtor rural?
            </p>
            <p className="text-sm text-red-500 mt-3">
              {ruralProducer?.producer_name} - {ruralProducer?.farm_name}
            </p>
          </div>
        </div>

        <div
          style={{position:"absolute",bottom:0,width:'100%'}}
          className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
        >
          <button
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            type="button"
            onClick={() => remove()}
          >
            Excluir
          </button>

          <button
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            type="button"
            data-autofocus
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default RemoveRuralProducerAlt;
