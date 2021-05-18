import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import { connect } from 'react-redux';

import { setData } from '../../redux/dataSet/dataSet.actions';

const DataSelect = ({ setData }) => {
  const handleSubmit = e => {
    e.preventDefault();
    setData(e.target.value);
  };

  return (
    <form>
      <Select labelId="label" id="select" value="Select" onChange={handleSubmit}>
        <MenuItem value="oilTemp">oilTemp</MenuItem>
        <MenuItem value="waterTemp">waterTemp</MenuItem>
        <MenuItem value="flareTemp">flareTemp</MenuItem>
        <MenuItem value="injValveOpen">injValveOpen</MenuItem>
        <MenuItem value="tubingPressure">tubingPressure</MenuItem>
        <MenuItem value="casingPressure">casingPressure</MenuItem>
      </Select>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  setData: dataSet => dispatch(setData(dataSet)),
});

export default connect(null, mapDispatchToProps)(DataSelect);
