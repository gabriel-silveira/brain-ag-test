import RuralProducerActionTypes from "./action-types";
import {IRuralProducer} from "../../_interfaces/rural_producer";

export const createRuralProducer = (payload: IRuralProducer) => ({
  type: RuralProducerActionTypes.CREATE,
  payload,
});
