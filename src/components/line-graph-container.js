import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Query } from '@apollo/client/react/components';

import LineGraph from './LineGraph'

const GET_DATA = gql`
  {
    getMeasurements(input: {
      metricName: "oilTemp"
    }) {
      metric,
      at,
      value,
      unit
    }
  }
`

const LineGraphContainer = () => (
  <Query query={GET_DATA}>
    {
      ({loading, error, data}) => {
        console.log({loading, error, data})
        console.log({error})
        console.log({data})
        if (loading) return 'Loading...';
        if (error) return error.message;

        const {getMeasurements} = data;

        return <LineGraph data={getMeasurements}/>
      }
    }
  </Query>
)


export default LineGraphContainer;
