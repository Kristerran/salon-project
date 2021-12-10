import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './components/store/utils/store';

import './css/App.css';
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavContainer from './components/main/nav/NavContainer.js';
import Home from './components/home/HomeContainer.js';
import Book from './components/book/BookContainer.js';
import Services from './components/services/ServicesContainer.js';
import About from './components/about/AboutContainer.js';
import Reviews from './components/reviews/ReviewContainer.js';
import StoreHome from './components/store/pages/Home';
import Detail from './components/store/pages/Detail';
import NoMatch from './components/store/pages/NoMatch';
import Login from './components/store/pages/Login';
import Signup from './components/store/pages/Signup';
import Success from './components/store/pages/Success';
import OrderHistory from './components/store/pages/OrderHistory';
import Footer from './components/main/footer.js';
import reviews from './seeds/reviewData.json'
import products from './seeds/productData.json';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Provider store={store} >
            <NavContainer />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/book' element={<Book />} />
              <Route path='/services' element={<Services/>} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews reviews={reviews}/>} />
              <Route path='/store' element={<StoreHome products={products}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/success" element={<Success />} />
              <Route path="/orderHistory" element={<OrderHistory />} />
              {/* <Route path="/products" element={<Detail  />} /> */}
              <Route element={<NoMatch />} />
            </Routes>
            <Footer />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
