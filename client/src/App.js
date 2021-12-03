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
import Home from './components/home/HomeContainer.js';
import Book from './components/book/BookContainer.js';
import BookForm from './components/book/BookingForm.js';
import Calendar from './components/book/Calendar.js';
import Services from './components/services/ServicesContainer.js';
import items from "./components/services/data.js";
import About from './components/about/AboutContainer.js';
import Stylists from './components/about/StylistCard.js';
import Location from './components/about/Map.js';
import Contact from './components/about/Contact.js';
import Hours from './components/about/Hours.js';
import Reviews from './components/reviews/ReviewContainer.js';
import Store from './components/store/StoreContainer.js';
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
          <Provider store={store} />
            <NavContainer />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/book' element={<Book />} />
              <Route path='/bookForm' element={<BookForm />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/services' element={<Services items={items} />} />
              <Route path='/about' element={<About />} />
              <Route path='/stylists' element={<Stylists />} />
              <Route path='/location' element={<Location />} />
              <Route path='/hours' element={<Hours />} />
              <Route path='/contact' element={<Contact />} />
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
