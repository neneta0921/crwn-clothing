import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';

import Header from './components/Header/Header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import { HomePage } from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import { SignInAndSignUpPage } from './pages/SignInAndSignUpPage/SignInAndSignUpPage';
import './App.css';

class App extends React.Component {

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(App);
