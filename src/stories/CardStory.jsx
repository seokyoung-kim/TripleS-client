import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Card from 'components/card/Card';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;

  > * {
    margin-right: 2rem;
  }
`;

storiesOf('Card', module)
  .addWithJSX('Default', () => (
    <CardWrapper>
      <Card />
      <Card />
      <Card />
      <Card isSaved />
      <Card image={null} />
    </CardWrapper>
  ))
  .addWithJSX('Saved', () => <Card isSaved />);
