import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"
import { InMemoryCache } from 'apollo-cache-inmemory'


import './styles/index.css'
import App from './containers/App'
import registerServiceWorker from './config/registerServiceWorker'


const client = new ApolloClient({
    uri: 'https://api.graph.cool/simple/v1/cjl0i4k9450n80155aqv83dw1',
    cache: new InMemoryCache()
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
    , document.getElementById('root'));
registerServiceWorker();
