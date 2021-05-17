import { createSelector } from 'reselect';

export const selectData = state => state.dataSet;

export const selectDataSet = createSelector([selectData], dataSet => dataSet.data);
