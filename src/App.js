import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { SignInAndSignUp } from './pages/SignInAndSignUp/SignInAndSignUp'
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
