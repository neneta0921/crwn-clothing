import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils'

import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { ShopPage } from './pages/ShopPage/ShopPage';
import { SignInAndSignUp } from './pages/SignInAndSignUp/SignInAndSignUp'
import './App.css';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
