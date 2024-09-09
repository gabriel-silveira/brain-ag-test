import { createSlice } from '@reduxjs/toolkit';
import {IRuralProducer} from "../../_interfaces/rural_producer";

const initialState: {
  ruralProducers: IRuralProducer[],
  ruralProducer?: IRuralProducer,
  deleteIndex?: number,
  createToaster: boolean,
  editToaster: boolean,
} = {
  ruralProducers: [],
  ruralProducer: undefined,
  deleteIndex: undefined,
  createToaster: false,
  editToaster: false,
};

const ruralProducerSlice = createSlice({
  name: 'rural-producer',
  initialState,
  reducers: {
    createRuralProducer: (state, action) => {
      console.log(state, action);
      state.ruralProducers.push(action.payload);
    },
    updateRuralProducer: (state, action) => {
      console.log(state, action);
      state.ruralProducers = [...action.payload];
    },
    setRuralProducer: (state, action) => {
      state.ruralProducer = action.payload;
    },
    setDeleteIndex: (state, action) => {
      state.deleteIndex = action.payload;
    },
    showCreateToaster: (state, action) => {
      state.createToaster = action.payload;
    },
    showEditToaster: (state, action) => {
      state.editToaster = action.payload;
    }
  },
});

export const {
  createRuralProducer,
  updateRuralProducer,
  setRuralProducer,
  setDeleteIndex,
  showCreateToaster,
  showEditToaster,
} = ruralProducerSlice.actions;

export default ruralProducerSlice.reducer;
