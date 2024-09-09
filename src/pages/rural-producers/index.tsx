import React, {useEffect, useState} from 'react';
import RuralProducersTable from "../../components/tables/rural-producers";
import Toaster from "../../components/toasters";
import {useDispatch, useSelector} from "react-redux";
import {IRuralProducer} from "../../_interfaces/rural_producer";
import {setDeleteIndex, updateRuralProducer} from "../../store/rural-producer/slice";
import {Dialog, DialogBackdrop, DialogPanel, DialogTitle} from "@headlessui/react";
import {ExclamationTriangleIcon} from "@heroicons/react/24/outline";

function RuralProducersPage() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [dialogData, setDialogData] = useState<{
    ruralProducer?: IRuralProducer,
    index: number,
  }>({
    ruralProducer: undefined,
    index: 0,
  });

  const {
    deleteIndex,
    ruralProducers,
  }: {
    deleteIndex: number,
    ruralProducers: IRuralProducer[],
    // @ts-ignore
  } = useSelector((rootReducer) => rootReducer.ruralProducerReducer);

  useEffect(() => {
    if (deleteIndex !== undefined) {
      const ruralProducer = ruralProducers.find(
        (rp, index) => index === deleteIndex
      );

      if (ruralProducer !== undefined) {
        setDialogData((prev) => ({
          ...prev,
          ruralProducer,
          index: deleteIndex,
        }));

        setOpen(() => true);
      }
    }
  }, [deleteIndex]);

  const {showCreateToaster, showEditToaster}: {
    showCreateToaster: boolean,
    showEditToaster: boolean,
    // @ts-ignore
  } = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  useEffect(() => {
    if (showCreateToaster) {
      setCreateSuccess(() => true);
    }

    if (showEditToaster) {
      setEditSuccess(() => true);
    }
  }, [showCreateToaster, showEditToaster]);

  function startRemovingRuralProducer() {
    const updatedRuralProducers: IRuralProducer[] = [];

    let i = 0;

    for (const currentRuralProducer of ruralProducers) {
      if (i !== dialogData.index) {
        updatedRuralProducers.push(currentRuralProducer);
      }

      i += 1;
    }

    dispatch(updateRuralProducer([...updatedRuralProducers]));
  }

  function closeDialog(remove: boolean) {
    setOpen(false);

    if (remove) {
      startRemovingRuralProducer();
    }

    setDialogData(() => ({
      ruralProducer: undefined,
      index: 0,
    }));

    dispatch(setDeleteIndex(undefined));
  }

  return (
    <div>
      <RuralProducersTable/>

      <Dialog
        open={open}
        onClose={($event) => setOpen($event)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600"/>
                  </div>

                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Excluir produtor rural
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Tem certeza que deseja excluir os dados do produtor rural?
                      </p>
                      <p className="text-sm text-red-500 mt-3">
                        {dialogData.ruralProducer?.producer_name} - {dialogData.ruralProducer?.farm_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  type="button"
                  onClick={() => closeDialog(true)}
                >
                  Excluir
                </button>

                <button
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  type="button"
                  data-autofocus
                  onClick={() => closeDialog(false)}
                >
                  Cancelar
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {createSuccess ? (
        <Toaster
          type="positive"
          message="Produtor rural criado com sucesso"
          onClose={() => setCreateSuccess(() => false)}
          timeout={5000}
        />
      ) : null}

      {editSuccess ? (
        <Toaster
          type="positive"
          message="Produtor rural atualizado com sucesso"
          onClose={() => setEditSuccess(() => false)}
          timeout={5000}
        />
      ) : null}
    </div>
  )
}

export default RuralProducersPage;
