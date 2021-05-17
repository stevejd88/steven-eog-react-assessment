import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { gql } from '@apollo/client';
import { Query } from '@apollo/client/react/components';

import { selectDataSet } from '../redux/dataSet/dataSet.selectors';

import LineGraph from './LineGraph';

const GET_DATA = gql`
  query getMeasurements($metricName: String!, $after: Timestamp!) {
    getMeasurements(input: { metricName: $metricName, after: $after }) {
      metric
      at
      value
      unit
    }
  }
`;

const LineGraphContainer = ({ dataSet }) => {
  const newAfter = new Date().valueOf() - 1800000;

  return (
    <Query query={GET_DATA} variables={{ metricName: dataSet, after: newAfter }}>
      {({ loading, error, data }) => {
        console.log(data);
        if (loading) return 'Loading...';
        if (error) return error.message;

        const { getMeasurements } = data;

        return <LineGraph data={getMeasurements} />;
      }}
    </Query>
  );
};

const mapStateToProps = createStructuredSelector({
  dataSet: selectDataSet,
});

export default connect(mapStateToProps)(LineGraphContainer);
