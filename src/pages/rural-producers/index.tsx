import React, {useEffect, useState} from 'react';
import RuralProducersTable from "../../components/tables/rural-producers";
import Toaster from "../../components/toasters";
import {useDispatch, useSelector} from "react-redux";
import type { RootState } from "../../store/store";
import {setTitle} from "../../store/rural-producer/ruralProducerSlice";

function RuralProducersPage() {
  const dispatch = useDispatch();
  const [createSuccess, setCreateSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [removeSuccess, setRemoveSuccess] = useState(false);
  const showCreateToaster = useSelector((state: RootState) => state.ruralProducerReducer.createToaster);
  const showEditToaster = useSelector((state: RootState) => state.ruralProducerReducer.editToaster);
  const showRemoveToaster = useSelector((state: RootState) => state.ruralProducerReducer.removeToaster);

  useEffect(() => {
    dispatch(setTitle('Produtores rurais'));
  }, [dispatch]);

  useEffect(() => {
    if (showCreateToaster) {
      setCreateSuccess(() => true);
    }

    if (showEditToaster) {
      setEditSuccess(() => true);
    }

    if (showRemoveToaster) {
      setRemoveSuccess(() => true);
    }
  }, [showCreateToaster, showEditToaster]);

  return (
    <div>
      <RuralProducersTable />

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

      {removeSuccess ? (
        <Toaster
          type="positive"
          message="Produtor rural excluído com sucesso"
          onClose={() => setRemoveSuccess(() => false)}
          timeout={5000}
        />
      ) : null}
    </div>
  )
}

export default RuralProducersPage;
