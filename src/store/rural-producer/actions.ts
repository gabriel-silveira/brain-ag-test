import RuralProducerActionTypes from "./action-types";
import {IRuralProducer} from "../../_interfaces/rural_producer";

export const createRuralProducer = (payload: IRuralProducer) => ({
  type: RuralProducerActionTypes.CREATE,
  payload,
});

export const editRuralProducer = (payload: IRuralProducer[]) => ({
  type: RuralProducerActionTypes.EDIT,
  payload: { ruralProducers: payload },
});

export const setRuralProducer = (payload: IRuralProducer) => ({
  type: RuralProducerActionTypes.SET,
  payload,
});
