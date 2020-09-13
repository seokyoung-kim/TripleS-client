import React from 'react';
import styled from 'styled-components';
import Header from 'components/common/header/Header';

import MailContainer from 'containers/mail/MailContainer';

const Wrapper = styled.div``;

const MailPage = () => {
  return (
    <Wrapper>
      <Header />
      <MailContainer />
    </Wrapper>
  );
};

export default MailPage;
