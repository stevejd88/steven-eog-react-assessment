import { combineReducers } from 'redux';

import dataSetReducer from './dataSet/dataSet.reducer';

const rootReducer = combineReducers({
  dataSet: dataSetReducer,
});

export default rootReducer;
