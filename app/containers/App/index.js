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
import Kit from 'containers/Kit';
import Checkout from 'containers/Checkout';
import Login from 'containers/Login';
import Authentication from 'containers/Authentication';
import AfterPayment from 'containers/AfterPayment';
import ChiliFooter from '../../components/ChiliFooter/Loadable';
<<<<<<< HEAD
import PageAboutMotochili from '../../components/PageAboutMotochili';
=======
import PageMoreMenu from '../PageMoreMenu';
>>>>>>> 4f15df2113d4d7388159a6baead40c1796a5b190

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/kit" component={Kit} />
        <Route exact path="/restaurants-list" component={RestaurantsList} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/authentication" component={Authentication} />
        <Route exact path="/login" component={Login} />
<<<<<<< HEAD
        <Route exact path="/page-about-motochili" component={PageAboutMotochili} />
=======
        <Route exact path="/more-menu" component={PageMoreMenu} />
        <Route exact path="/after-payment" component={AfterPayment} />
>>>>>>> 4f15df2113d4d7388159a6baead40c1796a5b190
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <ChiliFooter />
    </div>
  );
}
