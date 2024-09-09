import { combineReducers } from 'redux';

import ruralProducerReducer from "./rural-producer/slice";

const rootReducer = combineReducers({
  ruralProducerReducer,
});

export default rootReducer;
