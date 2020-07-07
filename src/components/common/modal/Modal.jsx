import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from 'redux/modules/ui';
import Portal from './Portal';

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* background-color: rgba(0, 0, 0, 0.6); */
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 99;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  overflow: auto;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  min-width: 360px;
  top: 0;
  transform: translateY(-10%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* box-shadow: rgba(39, 54, 86, 0.16) 0 24px 56px 0; */
  box-shadow: rgba(39, 54, 86, 0.16) 0 15px 30px 0;
  color: #273656;
  &:focus {
    outline: 0;
    border: 0;
  }
`;

const Modal = ({ maskClosable }) => {
  const dispatch = useDispatch();
  const { modal } = useSelector(({ ui }) => ({
    modal: ui.modal,
  }));

  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `position: ""; top: "";`;
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  const onClose = () => {
    dispatch(hideModal());
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  if (!modal) return null;

  return (
    <Portal elementId="modal-root">
      <ModalOverlay visible={modal} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={modal}
      >
        <ModalInner tabIndex="0">{modal.content}</ModalInner>
      </ModalWrapper>
    </Portal>
  );
};

Modal.propTypes = {
  maskClosable: PropTypes.bool,
};

Modal.defaultProps = {
  maskClosable: true,
};

export default Modal;
