import { showModal, hideModal } from 'redux/uiSlice';
import store from 'redux/store';

const ui = {
  showModal: (content) => store.dispatch(showModal(content)),
  hideModal: () => store.dispatch(hideModal()),
};

export default ui;
