import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import ui from 'libs/ui';
import AuthButton from './AuthButton';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const GoogleAuthButton = ({ type, textMap }) => {
  const onSuccess = (response) => {
    console.log(response);
    ui.hideModal();
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      render={(renderProps) => (
        <ButtonWrapper
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <img src={require('assets/images/google.png')} alt="google" />
          <p>{`구글 아이디로 ${textMap[type]}`}</p>
        </ButtonWrapper>
      )}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
    />
  );
};

const ButtonWrapper = styled(AuthButton)`
  background-color: ${(props) => props.theme.colors.gray[6]};
  color: ${(props) => props.theme.colors.secondary[1]};
  border: 1px solid ${(props) => props.theme.colors.primary[3]};

  &:hover {
    background-color: ${(props) => props.theme.colors.bg};
  }
`;

GoogleAuthButton.propTypes = {
  type: PropTypes.string.isRequired,
  textMap: PropTypes.string.isRequired,
};

export default GoogleAuthButton;
