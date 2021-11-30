import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Empty from './components/Empty';
import Loadable from 'react-loadable';
import NavbarContainer from './containers/NavbarContainer';
import Footer from './components/footer/footer.js';


const Loading = () => <div style={{height: '1000px'}}></div>;

const ItemContainer = Loadable({
  loader: () => import('./containers/ItemContainer'),
  loading: Loading
});

const CheckoutContainer = Loadable({
  loader: () => import('./containers/CheckoutContainer'),
  loading: Loading
});

const CartContainer = Loadable({
  loader: () => import('./containers/CartContainer'),
  loading: Loading
});

const HomepageContainer = Loadable({
  loader: () => import('./containers/HomeContainer'),
  loading: Loading
});

const ItemListContainer = Loadable({
  loader: () => import('./containers/ItemListContainer'),
  loading: Loading
});

const ItemsListGenderHomepage = Loadable({
  loader: () => import('./components/ItemListGender'),
  loading: Loading
});

const AdminContainer = Loadable({
  loader: () => import('./containers/AdminContainer'),
  loading: Loading
});

const Secret = Loadable({
  loader: () => import('./components/store/Secret'),
  loading: Loading
});

const Router = () => (
  <div>
    <NavbarContainer />
      <Switch>
        <Route exact path='/' component={HomepageContainer} />
        <Route exact path='/ItemList' component={ItemListContainer} />
        <Route exact path='/Item/:id/:item' component={ItemContainer} />
        <Route exact path='/Checkout' component={CheckoutContainer} />
        <Route exact path='/Cart' component={CartContainer} />
        <Route exact path='/ItemList/:gender' component={ItemListContainer} />
        <Route exact path='/Category/:gender' component={ItemListGender} />
        <Route exact path='/Admin' component={AdminContainer} />
        <Route exact path='/Dashboard' component={Secret} />
        <Route component={Empty}/>
      </Switch>
    <Footer />
  </div>
);

export default Router;