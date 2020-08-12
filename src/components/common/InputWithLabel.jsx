import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;

const InputBox = styled.div`
  width: 20rem;
  height: 2.5rem;
  border: 1px solid #eee;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.25rem;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;

const Label = styled.div`
  margin-bottom: 0.25rem;
`;

const InputWithLabel = (props) => {
  const { label } = props;
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputBox>
        <Input {...props} />
      </InputBox>
    </Wrapper>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string,
};

export default InputWithLabel;
