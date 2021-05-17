import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import NowWhat from './components/NowWhat';
import Dashboard from './components/Dashboard';

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://react.eogresources.com/graphql',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

// const store = createStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

// client
//   .query({
//     query: gql`
//       {
//         getMeasurements(input: { metricName: "oilTemp" }) {
//           metric
//           at
//           value
//           unit
//         }
//       }
//     `,
//   })
//   .then(res => console.log(res));

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Wrapper>
          <Header />
          {/* <NowWhat /> */}
          <Dashboard />
          <ToastContainer />
        </Wrapper>
      </Provider>
    </ApolloProvider>
  </MuiThemeProvider>
);

export default App;
