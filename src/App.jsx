import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Modal from 'components/common/modal/Modal';

const App = () => (
  <>
    <Helmet>
      <title>React App</title>
    </Helmet>
    <Switch>
      <Route path={['/']} component={MainPage} />
      <Redirect from="*" to="/" />
    </Switch>
    <Modal />
  </>
);

export default App;
