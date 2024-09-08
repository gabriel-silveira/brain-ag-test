import React, {useEffect, useState} from 'react';
import RuralProducersTable from "../../components/tables/rural-producers";
import Toaster from "../../components/toasters";
import {useSelector} from "react-redux";

function RuralProducersPage() {
  const [createSuccess, createEditSuccess] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);

  const {showCreateToaster, showEditToaster}: {
    showCreateToaster: boolean,
    showEditToaster: boolean,
    // @ts-ignore
  } = useSelector(rootReducer => rootReducer.ruralProducerReducer);

  useEffect(() => {
    if (showEditToaster) {
      setEditSuccess(() => true);
    }
  }, [showCreateToaster, showEditToaster]);

  return (
    <div>
      <RuralProducersTable/>

      {createSuccess ? (
        <Toaster
          type="positive"
          message="Produtor rural criado com sucesso"
          onClose={() => createEditSuccess(() => false)}
          timeout={5000}
        />
      ) : ''}

      {editSuccess ? (
        <Toaster
          type="positive"
          message="Produtor rural atualizado com sucesso"
          onClose={() => setEditSuccess(() => false)}
          timeout={5000}
        />
      ) : ''}
    </div>

  )
}

export default RuralProducersPage;
