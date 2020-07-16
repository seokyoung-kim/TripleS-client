import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { NaverIcon, GoogleIcon } from 'components/common/Icons';

const providerMap = {
  google: {
    name: '구글',
    icon: GoogleIcon,
  },
  naver: {
    name: '네이버',
    icon: NaverIcon,
  },
};

const SocialAuthButton = ({ type, size = 'md', onClick, className }) => {
  const { icon: Icon, name, color } = providerMap[type];

  return (
    <Wrapper
      type={type}
      size={size}
      onClick={onClick}
      className={className}
      color={color}
    >
      <Icon />
      <div>{`${name} 아이디로 로그인`}</div>
    </Wrapper>
  );
};

SocialAuthButton.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

const Wrapper = styled.button`
  border: none;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s;
  width: 20rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  height: 3.5rem;
  font-family: 'Noto Sans KR';

  ${(prop) =>
    prop.type === 'naver' &&
    css`
      background-color: #1ec800;
      color: white;

      &:hover {
        background-color: #20c003;
      }
    `}

  ${(prop) =>
    prop.type === 'google' &&
    css`
      background-color: #fafafa;
      color: #17278d;
      border: 1px solid #dddddd;

      &:hover {
        background-color: #f6f6f6;
      }
    `}

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SocialAuthButton;
