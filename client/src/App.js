import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { Provider } from 'react-redux';
import store from './utils/store';

import './css/App.css';
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavContainer from './components/main/nav/NavContainer.js';
import Footer from './components/main/footer.js';
import Home from './components/home/HomeContainer.js';
import Services from './components/services/ServicesContainer.js';
import About from './components/about/AboutContainer.js';
import Reviews from './components/reviews/ReviewsContainer.js';
import Store from './components/store/StoreContainer.js';

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
            <NavContainer />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/store' element={<Store />} />
            </Routes>
            <Footer />
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
