import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'react-router-dom';

// redux
import store from 'redux/store';
import { setUser } from 'redux/usersSlice';

// components
import Modal from 'components/common/modal/Modal';
import ScrollToTop from 'components/common/ScrollToTop';

// pages
import MainPage from 'pages/MainPage';
import AuthPage from 'pages/AuthPage';

function loadUser() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return;

    store.dispatch(setUser(user));
  } catch (e) {
    console.log('localStorage is not working');
  }
}

loadUser();

const App = () => {
  return (
    <>
      <Helmet>
        <title>TripleS</title>
      </Helmet>
      <Modal />
      <ScrollToTop />
      <Switch>
        <Route path="/login" component={AuthPage} />
        <Route exact path={['/']} component={MainPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
