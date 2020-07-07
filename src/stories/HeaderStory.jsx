import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Header from 'components/common/header/Header';

const HeaderWrapper = styled.div``;

storiesOf('Header', module).addWithJSX('Default', () => (
  <HeaderWrapper>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </HeaderWrapper>
));
