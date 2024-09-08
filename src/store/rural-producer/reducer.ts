import RuralProducerActionTypes from "./action-types";
import {IRuralProducer} from "../../_interfaces/rural_producer";

const initialState: {
  ruralProducers: IRuralProducer[],
  ruralProducer: IRuralProducer,
} = {
  ruralProducers: [
    {
      document: "33871402000110",
      producer_name: "Gabriel Silveira de Souza",
      farm_name: "Fazenda do Gabriel",
      city: "Caraguatatuba",
      state: "São Paulo",
      farm_area: "100",
      arable_area: "50",
      vegetation_area: "80",
      crops_planted: ["Algodão", "Milho"]
    }
  ],
  ruralProducer: {
    document: "",
    producer_name: "",
    farm_name: "",
    city: "",
    state: "",
    farm_area: "",
    arable_area: "",
    vegetation_area: "",
    crops_planted: []
  },
};

const ruralProducerReducer = (
  state = initialState,
  action: { type: string, payload: object }
) => {
  switch (action.type) {
    case RuralProducerActionTypes.CREATE:
      return {
        ...state,
        ruralProducers: [...state.ruralProducers, action.payload],
      };
    case RuralProducerActionTypes.UPDATE:
      return {
        ...state,
        ...action.payload,
      };
    case RuralProducerActionTypes.SET_DELETE_INDEX:
      return {
        ...state,
        deleteIndex: action.payload,
      };
    case RuralProducerActionTypes.SET:
      return {
        ...state,
        ruralProducer: {...action.payload},
      };
    case RuralProducerActionTypes.SHOW_CREATE_TOASTER:
      return {
        ...state,
        showCreateToaster: action.payload,
      };
    case RuralProducerActionTypes.SHOW_EDIT_TOASTER:
      return {
        ...state,
        showEditToaster: action.payload,
      };
    default:
      return state;
  }
};

export default ruralProducerReducer;
