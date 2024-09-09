import { createSlice } from '@reduxjs/toolkit';
import {IRuralProducer} from "../../_interfaces/rural_producer";

const initialState: {
  title: string,
  ruralProducers: IRuralProducer[],
  ruralProducer?: IRuralProducer,
  deleteIndex?: number,
  createToaster: boolean,
  editToaster: boolean,
  removeToaster: boolean,
} = {
  title: '',
  ruralProducers: [],
  ruralProducer: undefined,
  deleteIndex: undefined,
  createToaster: false,
  editToaster: false,
  removeToaster: false,
};

const ruralProducerSlice = createSlice({
  name: 'rural-producer',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    createRuralProducer: (state, action) => {
      state.ruralProducers.push(action.payload);
    },
    updateRuralProducer: (state, action) => {
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
    },
    showRemoveToaster: (state, action) => {
      state.removeToaster = action.payload;
    }
  },
});

export const {
  setTitle,
  createRuralProducer,
  updateRuralProducer,
  setRuralProducer,
  setDeleteIndex,
  showCreateToaster,
  showEditToaster,
  showRemoveToaster,
} = ruralProducerSlice.actions;

export default ruralProducerSlice.reducer;
