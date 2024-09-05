import RuralProducerActionTypes from "./action-types";

const initialState = {
  ruralProducers: [
    {
      "document": 33871402000110,
      "producer_name": "Gabriel Silveira de Souza",
      "farm_name": "Fazenda do Gabriel",
      "city": "Caraguatatuba",
      "state": "São Paulo",
      "farm_area": 100,
      "arable_area": 50,
      "vegetation_area": 80,
      "crops_planted": ["Algodão", "Milho"]
    }
  ],
  ruralProducer: null,
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
    default:
      return state;
  }
};

export default ruralProducerReducer;
