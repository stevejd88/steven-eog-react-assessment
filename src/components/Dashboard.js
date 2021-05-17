import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import DataSelect from './DataSelect'
import LineGraphContainer from './line-graph-container'

const useStyles = makeStyles({
  graphDiv: {
    margin: '5% 25%',
  },
});


const Dashboard = () => {
  const classes = useStyles();
  return (
    <Container className={classes.graphDiv}>
      <h1>Hello</h1>
      <DataSelect />
      <LineGraphContainer />
    
    </Container>
  )
}

export default Dashboard;