import DataSetTypes from './dataSet.types';

export const setData = dataSet => ({
  type: DataSetTypes.SET_DATA_SET,
  payload: dataSet,
});
