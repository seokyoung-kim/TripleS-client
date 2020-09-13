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
import MailPage from 'pages/MailPage';
import LoginCheckPage from 'pages/LoginCheckPage';
import SignupPage from 'pages/SignupPage';
import PlatformsPage from 'pages/PlatformsPage';
import WritersPage from 'pages/WritersPage';


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
        <Route path="/check" component={LoginCheckPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={AuthPage} />
        <Route path="/mail" component={MailPage} />
        <Route path="/cards/platform/:platform" component={PlatformsPage} />
        <Route path="/cards/writer/:writer" component={WritersPage} />
        <Route exact path={['/']} component={MainPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
};

export default App;
