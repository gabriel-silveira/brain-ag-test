import { combineReducers } from 'redux';

import ruralProducerReducer from "./rural-producer/ruralProducerSlice";

const rootReducer = combineReducers({
  ruralProducerReducer,
});

export default rootReducer;
