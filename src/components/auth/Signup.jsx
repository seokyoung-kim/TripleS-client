import React from 'react';
import styled from 'styled-components';
import useInput from 'libs/hooks/useInput';
import InputWithLabel from 'components/common/InputWithLabel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
`;

const Signup = () => {
  const email = useInput('');
  console.log(email.value);

  return (
    <Wrapper>
      <Title>title</Title>
      <InputWithLabel {...email} label="email" />
    </Wrapper>
  );
};

export default Signup;
