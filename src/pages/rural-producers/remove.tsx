import React, {useEffect, useState} from 'react';
import RemoveRuralProducerDialog from "../../components/dialogs/rural-producer/remove";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store/store";
import {useParams} from "react-router";
import {IRuralProducer} from "../../_interfaces/rural_producer";
import {setTitle, showRemoveToaster, updateRuralProducer} from "../../store/rural-producer/ruralProducerSlice";

function RemoveRuralProducerPage() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();
  const ruralProducers = useSelector((state: RootState) => state.ruralProducerReducer.ruralProducers);
  const [ruralProducer, setRuralProducer] = useState<IRuralProducer>();

  useEffect(() => {
    dispatch(setTitle('Excluir produtor rural'));
  }, [dispatch]);

  useEffect(() => {
    setRuralProducer(() => ({
      ...ruralProducers[Number(id) - 1],
    }));
  }, [id, ruralProducers]);

  function removeRuralProducer(remove: boolean) {
    if (remove) {
      const updatedRuralProducers: IRuralProducer[] = [];

      let i = 0;

      for (const currentRuralProducer of ruralProducers) {
        if (i !== Number(id) - 1) {
          updatedRuralProducers.push(currentRuralProducer);
        }

        i += 1;
      }

      dispatch(updateRuralProducer([...updatedRuralProducers]));
      dispatch(showRemoveToaster(true));
    }

    navigate(`/`);
  }

  return (
    <RemoveRuralProducerDialog
      ruralProducer={ruralProducer}
      index={Number(id) - 1}
      onClose={($event) => removeRuralProducer($event)}
    />
  )
}

export default RemoveRuralProducerPage;
