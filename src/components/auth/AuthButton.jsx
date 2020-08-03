import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { NaverIcon, GoogleIcon } from 'components/common/Icons';

const providerMap = {
  naver: {
    name: '네이버',
    icon: <NaverIcon />,
    color: '#1EC800',
  },
  google: {
    name: '구글',
    icon: <GoogleIcon />,
    color: '#f6f6f6',
  },
};

const SocialAuthButton = ({ provider, currentPath }) => {
  const info = providerMap[provider];
  const { icon, name, color } = info;

  const host =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_API_HOST
      : 'http://localhost:8080';

  const redirectTo = `${host}/api/v1/auth/social/redirect/${provider}?next=${currentPath}`;

  return (
    <Wrapper provider={provider} color={color} href={redirectTo}>
      {icon}
      <div>{`${name} 아이디로 로그인`}</div>
    </Wrapper>
  );
};

SocialAuthButton.propTypes = {
  provider: PropTypes.string,
  currentPath: PropTypes.string,
};

const Wrapper = styled.a`
  border: none;
  padding: 0 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.1s;
  width: 20rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  height: 3.5rem;
  font-family: 'Noto Sans KR';
  border-radius: 8px;
  box-shadow: 8px 8px 16px #ccc, -8px -8px 16px #ffffff;

  ${(prop) =>
    prop.provider === 'naver' &&
    css`
      background: linear-gradient(145deg, #1ec800, #1eb303);
      color: white;

      &:hover {
        background: linear-gradient(145deg, #1eb303, #1ec800);
      }
    `}

  ${(prop) =>
    prop.provider === 'google' &&
    css`
      background-color: #fafafa;
      background: linear-gradient(145deg, #f6f6f6, #eeeeee);
      color: #17278d;

      &:hover {
        background: linear-gradient(145deg, #eeeeee, #f6f6f6);
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
