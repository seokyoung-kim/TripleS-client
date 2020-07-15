import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import AuthModal from 'components/auth/AuthModal';

import colors from 'styles/colors';

const Wrapper = styled.div`
  border: 1px solid ${colors.gray[4]};
  border-radius: 0.5rem;
  width: 400px;
`;

storiesOf('AuthModal', module).addWithJSX('Default', () => (
  <Wrapper>
    <AuthModal />
  </Wrapper>
));
