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

import HomePage from '../../containers/HomePage/';
import RestaurantsList from '../../containers/RestaurantsList';
import RestaurantsListChain from '../../containers/RestaurantsListChain';
import RestaurantPage from '../RestaurantPage';
import Kit from '../../containers/Kit';
import Checkout from '../../containers/Checkout';
import Cart from '../../containers/Cart';
import WebViewPage from '../../containers/WebViewPage';
import Authentication from '../../containers/Authentication';
import AfterPayment from '../../containers/AfterPayment';
import SuccessPayment from '../../containers/SuccessPayment';
import ChiliFooter from '../../components/ChiliFooter';
import PageMoreMenu from '../PageMoreMenu';
import ForgotPassword from '../ForgotPassword';
import PageProfile from '../PageProfile';
import PageProfileNewAddress from '../PageProfileNewAddress';
import PageProfileEditAddress from '../PageProfileEditAddress';
import PageProfileEdit from '../PageProfile/PageProfileEdit';
import PageProfileWallet from '../PageProfile/PageProfileWallet';
import ActivationCode from '../ActivationCode';
import ProfileChangePass from '../PageProfile/PageProfileChangePass';
import ChiliIntroduce from '../PageProfile/ChiliIntroduce';
import ChiliChance from '../PageProfile/ChiliChance';
import ChiliEvent from '../PageProfile/ChiliEvent';
import ChiliComment from '../PageProfile/ChiliComment';
import FavRestaurant from '../PageProfile/FavRestaurant';
import FavEmptyRestaurant from '../PageProfile/FavEmptyRestaurant';
import Transaction from '../PageProfile/Transaction';
import TransactionEmpty from '../PageProfile/TransactionEmpty';
import Order from '../PageProfile/Order';
import OrderEmpty from '../PageProfile/OrderEmpty';
import MyComments from '../PageProfile/MyComments';
import NoAddress from '../PageProfile/NoAddress';
import Page404 from '../Page404';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <main className="main-container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/kit" component={Kit} />
          <Route exact path="/restaurants/:citySlug/" component={RestaurantsList} />
          <Route exact path="/restaurants/:citySlug/:pointSlug" component={RestaurantsList} />
          <Route exact path="/chain/:slug/" component={RestaurantsListChain} />
          <Route exact path="/checkout/:id" component={Checkout} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/authentication" component={Authentication} />
          <Route exact path="/more-menu" component={PageMoreMenu} />
          <Route exact path="/after-payment/:id" component={AfterPayment} />
          <Route exact path="/success-payment/:id" component={SuccessPayment} />
          <Route exact path="/more-menu" component={PageMoreMenu} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/profile" component={PageProfile} />
          <Route exact path="/profile/edit" component={PageProfileEdit} />
          <Route exact path="/profile/add-new-address" component={PageProfileNewAddress} />
          <Route exact path="/profile/edit-address/:id" component={PageProfileEditAddress} />
          <Route exact path="/profile/change-pass" component={ProfileChangePass} />
          <Route exact path="/profile/chili-Introduce" component={ChiliIntroduce} />
          <Route exact path="/profile/chili-Chance" component={ChiliChance} />
          <Route exact path="/profile/chili-Event" component={ChiliEvent} />
          <Route exact path="/profile/chili-Comment" component={ChiliComment} />
          <Route exact path="/profile/Fav-Restaurant" component={FavRestaurant} />
          <Route exact path="/profile/Fav-Empty-Restaurant" component={FavEmptyRestaurant} />
          <Route exact path="/profile/transaction" component={Transaction} />
          <Route exact path="/profile/transaction-Empty" component={TransactionEmpty} />
          <Route exact path="/profile/order" component={Order} />
          <Route exact path="/profile/order-Empty" component={OrderEmpty} />
          <Route exact path="/profile/my-comments" component={MyComments} />
          <Route exact path="/profile/no-address" component={NoAddress} />
          <Route exact path="/profile/wallet" component={PageProfileWallet} />
          <Route exact path="/activation-code" component={ActivationCode} />
          <Route exact path="/static/:slug" component={WebViewPage} />
          <Route exact path="/:citySlug/:restaurantSlug" component={RestaurantPage} />
          <Route component={Page404} />
        </Switch>
        <ChiliFooter />
      </main>
      <GlobalStyle />
    </React.Fragment>
  );
}
