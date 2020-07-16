import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'react-router-dom';

// redux
import store from 'redux/store';
import { setUser } from 'redux/usersSlice';

// components
import Modal from 'components/common/modal/Modal';

// pages
import MainPage from 'pages/MainPage';
import NaverCallbackPage from 'components/auth/naver/NaverCallbackPage';

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
      <Switch>
        <Route path="/login/callback" component={NaverCallbackPage} />
        <Route exact path={['/']} component={MainPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
