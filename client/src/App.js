import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Empty from './components/store/Empty';
import { ApolloProvider } from '@apollo/react-hooks';
import Loadable from 'react-loadable';
import ApolloClient from 'apollo-boost';

import { Provider } from 'react-redux';
import store from './utils/store';

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
 import Store from './components/store/StoreContainer.js';
import Footer from './components/main/footer.js';

const Loading = () => <div style={{ height: '1000px' }}></div>;

const ItemContainer = Loadable({
  loader: () => import('./components/store/Containers/ItemContainer'),
  loading: Loading
});

const CheckoutContainer = Loadable({
  loader: () => import('./components/store/Containers/CheckoutContainer'),
  loading: Loading
});

const CartContainer = Loadable({
  loader: () => import('./components/store/Containers/CartContainer'),
  loading: Loading
});

const HomepageContainer = Loadable({
  loader: () => import('./components/home/HomeContainer'),
  loading: Loading
});

const ItemsListContainer = Loadable({
  loader: () => import('./components/store/Containers/ItemListContainer'),
  loading: Loading
});

const ItemsListGenderHomepage = Loadable({
  loader: () => import('./components/store/Containers/ItemListGender'),
  loading: Loading
});

const AdminContainer = Loadable({
  loader: () => import('./components/store/Containers/AdminContainer'),
  loading: Loading
});

const Secret = Loadable({
  loader: () => import('./components/store/Containers/Secret'),
  loading: Loading
});


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
              <Route path='/services' element={<Services items={items} />} />
              <Route path='/about' element={<About />} />
              <Route path='/reviews' element={<Reviews />} />
              <Route path='/store' element={<Store />} />
              <Route exact path='/' component={HomepageContainer} />
              <Route exact path='/itemlist' component={ItemsListContainer} />
              <Route exact path='/item/:id/:item' component={ItemContainer} />
              <Route exact path='/checkout' component={CheckoutContainer} />
              <Route exact path='/cart' component={CartContainer} />
              <Route exact path='/itemlist/:gender' component={ItemsListContainer} />
              <Route exact path='/category/:gender' component={ItemsListGenderHomepage} />
              <Route exact path='/admin' component={AdminContainer} />
              <Route exact path='/dashboard' component={Secret} />
              <Route component={Empty}/>
            </Routes>
            <Footer />
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
