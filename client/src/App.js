import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { Provider } from 'react-redux';
import store from './utils/store';

import './css/App.css';
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavPane from './containers/navpane.js';
import Footer from './components/footer.js';
import Login from './containers/LoginContainer.js';
// import Signup from './containers/SignupContainer.js';
import Home from './containers/HomeContainer.js';
import ServiceMenu from './components/service-menu/ServiceMenu.js';
import Profiles from './components/stylist-profiles/stylists.js';
import Store from './containers/ItemListContainer.js';

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
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/serviceMenu' element={<ServiceMenu />} />
              <Route path='/profiles' element={<Profiles />} />
              <Route path='/store' element={<Store />} />
            </Routes>
            <Footer />
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
