import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';

import * as C from './styles';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: ReactNode;
}

function Modal({ isShown, hide, modalContent }: ModalProps) {
  const modal = (
    <C.Container>
      <C.Backdrop />
      <C.Header>
        <C.OptionButton onClick={hide}>
          <FiX size={20} color="#8c8c8c" />
        </C.OptionButton>
      </C.Header>
      <C.Wrapper>
        <C.StyledModal>
          <C.Content>{modalContent}</C.Content>
        </C.StyledModal>
      </C.Wrapper>
    </C.Container>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
}
export default Modal;
