import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import DataSelect from './DataSelect';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LineGraphContainer from './line-graph-container';
import { selectDataSet } from '../redux/dataSet/dataSet.selectors';

const useStyles = makeStyles({
  graphDiv: {
    margin: '5% 25%',
  },
});

const Dashboard = ({ dataSet }) => {
  const classes = useStyles();
  return (
    <Container className={classes.graphDiv}>
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
