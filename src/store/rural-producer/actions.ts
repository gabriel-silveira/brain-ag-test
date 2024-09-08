import RuralProducerActionTypes from "./action-types";
import {IRuralProducer} from "../../_interfaces/rural_producer";

export const createRuralProducer = (payload: IRuralProducer) => ({
  type: RuralProducerActionTypes.CREATE,
  payload,
});

export const updateRuralProducer = (payload: IRuralProducer[]) => ({
  type: RuralProducerActionTypes.UPDATE,
  payload: { ruralProducers: payload },
});

export const setIndexToBeRemoved = (payload: number | undefined) => ({
  type: RuralProducerActionTypes.SET_DELETE_INDEX,
  payload,
});

export const setRuralProducer = (payload: IRuralProducer) => ({
  type: RuralProducerActionTypes.SET,
  payload,
});

export const showCreateToaster = (payload: boolean) => ({
  type: RuralProducerActionTypes.SHOW_CREATE_TOASTER,
  payload,
})

export const showEditToaster = (payload: boolean) => ({
  type: RuralProducerActionTypes.SHOW_EDIT_TOASTER,
  payload,
})
