import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApolloClient from 'apollo-boost';

import { Provider } from 'react-redux';
import store from './utils/store';

import './css/App.css';
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavPane from './components/navpane.js';
import Footer from './components/footer/footer.js';
import Login from './containers/LoginContainer.js';
import Signup from './containers/SignupContainer.js';
import Home from './components/home/home.js';
import ServiceMenu from './components/service-menu/service-menu.js';
import Profiles from './components/profiles/profiles.js';
import Store from './components/containers/ItemListContainer.js';

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Provider store={store} />
            <NavPane />
            <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
                <Route path='/ServiceMenu' element={<ServiceMenu />} />
                <Route path='/Profiles' element={<Profiles />} />
                <Route path='/Store' element={<Store />} />
            </Switch>
          <Footer />
        </div>
        </Router>
      </ApolloProvider>
  );
}

export default App;
