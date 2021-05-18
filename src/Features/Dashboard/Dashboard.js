import React from 'react';
import Container from '@material-ui/core/Container';

import DataSelect from './DataSelect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LineGraphContainer from './LineGraphContainer';
import { selectDataSet } from '../../redux/dataSet/dataSet.selectors';

const Dashboard = ({ dataSet }) => {
  return (
    <Container>
      <h1>{dataSet ? dataSet : 'Select a Metric'}</h1>
      <DataSelect />
      <LineGraphContainer />
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  dataSet: selectDataSet,
});

export default connect(mapStateToProps)(Dashboard);
