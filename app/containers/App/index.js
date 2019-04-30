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
import RestaurantPage from '../RestaurantPage';
import Kit from 'containers/Kit';
import Checkout from 'containers/Checkout';
import Cart from 'containers/Cart';
import Login from 'containers/Login';
import Authentication from 'containers/Authentication';
import AfterPayment from 'containers/AfterPayment';
import SuccessPayment from 'containers/SuccessPayment';
import ChiliFooter from '../../components/ChiliFooter/Loadable';
import PageAboutMotochili from '../PageAboutMotochili';
import PageMoreMenu from '../PageMoreMenu';
import ForgotPassword from '../ForgotPassword';
import PageProfile from '../PageProfile';
import Filters from '../Filters';
import PageProfileNewAddress from '../PageProfileNewAddress';
import PageProfileEditAddress from '../PageProfileEditAddress';
import PageProfileEdit from '../PageProfile/PageProfileEdit';
import ActivationCode from '../ActivationCode';
import ProfileChangePass from '../PageProfile/PageProfileChangePass';
import ChiliIntroduce from '../PageProfile/ChiliIntroduce';
import ChiliChance from '../PageProfile/ChiliChance';
import ChiliEvent from '../PageProfile/ChiliEvent';
import ChiliComment from '../PageProfile/ChiliComment';
import FavRestaurant from '../PageProfile/FavRestaurant';
import Transaction from '../PageProfile/Transaction';
import Order from '../PageProfile/Order';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/kit" component={Kit} />
          <Route exact path="/restaurants-list/:cityId/:point" component={RestaurantsList} />
          <Route exact path="/restaurant-page/:id" component={RestaurantPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/authentication" component={Authentication} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/more-menu" component={PageMoreMenu} />
          <Route exact path="/after-payment" component={AfterPayment} />
          <Route exact path="/success-payment" component={SuccessPayment} />
          <Route exact path="/more-menu" component={PageMoreMenu} />
          <Route exact path="/page-about-motochili" component={PageAboutMotochili} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/profile" component={PageProfile} />
          <Route exact path="/profile/edit" component={PageProfileEdit} />
          <Route exact path="/filters" component={Filters} />
          <Route exact path="/profile/add-new-address" component={PageProfileNewAddress} />
          <Route exact path="/profile/edit-address/:id" component={PageProfileEditAddress} />
          <Route exact path="/profile/change-pass" component={ProfileChangePass} />
          <Route exact path="/profile/Chili-Introduce" component={ChiliIntroduce} />
          <Route exact path="/profile/Chili-Chance" component={ChiliChance} />
          <Route exact path="/profile/Chili-Event" component={ChiliEvent} />
          <Route exact path="/profile/Chili-Comment" component={ChiliComment} />
          <Route exact path="/profile/Fav-Restaurant" component={FavRestaurant} />
          <Route exact path="/profile/Transaction" component={Transaction} />
          <Route exact path="/profile/Order" component={Order} />
          <Route exact path="/activation-code" component={ActivationCode} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <GlobalStyle />
      <ChiliFooter />
    </React.Fragment>
  );
}