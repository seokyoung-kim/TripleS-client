import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

import Card from 'components/card/Card';
import NewCard from 'components/card/NewCard';

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

storiesOf('Card', module)
  .addWithJSX('Default', () => (
    <CardWrapper>
      <NewCard />
      <Card isSaved />
      <Card image={null} />
    </CardWrapper>
  ))
  .addWithJSX('Saved', () => <Card isSaved />)
  .addWithJSX('NewCard', () => (
    <CardWrapper>
      <NewCard />
    </CardWrapper>
  ));
