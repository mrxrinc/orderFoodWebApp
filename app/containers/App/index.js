/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import RestaurantsList from 'containers/RestaurantsList/Loadable';
import RestaurantPage from 'containers/RestaurantPage/Loadable';
import Kit from 'containers/Kit';
import Checkout from 'containers/Checkout';
import Login from 'containers/Login';
import Authentication from 'containers/Authentication';
import AfterPayment from 'containers/AfterPayment';
import ChiliFooter from '../../components/ChiliFooter/Loadable';
import PageAboutMotochili from '../PageAboutMotochili';
import PageMoreMenu from '../PageMoreMenu';
import ForgotPassword from '../ForgotPassword';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/kit" component={Kit} />
        <Route exact path="/restaurants-list" component={RestaurantsList} />
        <Route exact path="/restaurant-page" component={RestaurantPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/authentication" component={Authentication} />        
        <Route exact path="/more-menu" component={PageMoreMenu} />
        <Route exact path="/after-payment" component={AfterPayment} />        
        // <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/page-about-motochili" component={PageAboutMotochili} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <ChiliFooter />
    </div>
  );
}
