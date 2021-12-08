import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { Provider } from 'react-redux';
import store from './utils/store';

import './css/App.css';
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavContainer from './src/components/main/nav/NavContainer.js';
import Home from './src/components/home/HomeContainer.js';
import Book from './src/components/book/BookContainer.js';
import Services from './src/components/services/ServicesContainer.js';
import items from "./src/components/services/data.js";
import About from './src/components/about/AboutContainer.js';
import Reviews from './src/components/reviews/ReviewContainer.js';
import Store from './src/components/store/pages/Home';
import Detail from './src/components/store/pages/Detail';
import NoMatch from '.components/store/pages/NoMatch';
import Login from '.components/store/pages/Login';
import Signup from '.components/store/pages/Signup';
import Success from '.components/store/pages/Success';
import OrderHistory from '.components/store/pages/OrderHistory';
import Footer from './src/components/main/footer.js';


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
              <Route path='/services' element={<Services items={items} />} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/store' element={<Store />} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/success" component={Success} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Routes>
            <Footer />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
