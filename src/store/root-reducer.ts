import { combineReducers } from 'redux';

import ruralProducerReducer from "./rural-producer/reducer";

const rootReducer = combineReducers({
  ruralProducerReducer,
});

export default rootReducer;
