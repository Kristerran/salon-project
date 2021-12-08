import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import { Provider } from 'react-redux';
<<<<<<< HEAD
import store from './storeConfig.js';
=======
// import store from './storeConfig.js';
>>>>>>> 99702948de4a6e6a1fc97193e9df64735da57459

import './css/App.css';
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavContainer from './components/main/nav/NavContainer.js';
import Home from './components/home/HomeContainer.js';
import Book from './components/book/BookContainer.js';
import Services from './components/services/ServicesContainer.js';
import items from "./components/services/data.js";
import About from './components/about/AboutContainer.js';
import Reviews from './components/reviews/ReviewContainer.js';
<<<<<<< HEAD
import Store from './components/store/Containers/HomepageContainer';
=======
// import Store from './components/store/Containers/HomepageContainer';
>>>>>>> 99702948de4a6e6a1fc97193e9df64735da57459
import Footer from './components/main/footer.js';


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
<<<<<<< HEAD
          <Provider store={store} >
=======
          {/* <Provider store={store} > */}
>>>>>>> 99702948de4a6e6a1fc97193e9df64735da57459
            <NavContainer />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/book' element={<Book />} />
              <Route path='/services' element={<Services items={items} />} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews />} />
              {/* <Route path='/store' element={<Store />} /> */}
            </Routes>
            <Footer />
<<<<<<< HEAD
          </Provider>
=======
          {/* </Provider> */}
>>>>>>> 99702948de4a6e6a1fc97193e9df64735da57459
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
