import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { showModal } from 'redux/modules/ui';

const Wrapper = styled.div``;

const MainPage = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      showModal({
        content: <div>modal</div>,
      }),
    );
  };

  return (
    <Wrapper>
      <button type="button" onClick={onClick}>
        modal
      </button>
    </Wrapper>
  );
};

export default MainPage;
