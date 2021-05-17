import DataSetTypes from './dataSet.types';

const INITIAL_STATE = {
  data: '',
};

const dataSetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DataSetTypes.SET_DATA_SET:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default dataSetReducer;
