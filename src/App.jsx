import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Modal from 'components/common/modal/Modal';
import NaverLoginPage from 'pages/NaverLoginPage';

const App = () => (
  <>
    <Helmet>
      <title>TripleS</title>
    </Helmet>
    <Modal />
    <Switch>
      <Route exact path={['/']} component={MainPage} />
      <Route exact path="/login" component={NaverLoginPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </>
);

export default App;
