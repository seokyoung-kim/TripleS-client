import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  width: 100%;
  margin: 0 auto;
  min-width: 360px;

  @media (max-width: 1200px) {
    width: 816px;
  }

  @media (max-width: 816px) {
    width: 552px;
    padding-left: 0rem;
    padding-right: 0rem;
  }

  @media (max-width: 552px) {
    width: 100%;
    padding-left: 0rem;
    padding-right: 0rem;
  }
`;

const Responsive = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

Responsive.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(Responsive);
