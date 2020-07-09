import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';

const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

export default withProvider;
