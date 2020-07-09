import { showModal, hideModal } from 'redux/modules/ui';
import store from 'redux/store';

const ui = {
  showModal: (content) => store.dispatch(showModal(content)),
  hideModal: () => store.dispatch(hideModal()),
};

export default ui;
