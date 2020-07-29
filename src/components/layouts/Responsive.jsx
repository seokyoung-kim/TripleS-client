import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  min-width: 360px;

  @media (max-width: 1903px) {
    width: 1440px;
  }

  @media (max-width: 1535px) {
    width: 1072px;
  }

  @media (max-width: 1167px) {
    width: 704px;
  }

  @media (max-width: 799px) {
    width: 100%;
    padding: 0 3rem;
  }
`;

const Responsive = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

Responsive.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Responsive);
