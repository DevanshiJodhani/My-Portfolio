import styled from 'styled-components';
import React from 'react';

const Modal = ({ message, onClose }) => {
  return (
    <Overlay>
      <ModalContainer>
        <Message>{message}</Message>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #112e42;
  padding: 35px;
  border-radius: 12px;
  text-align: center;
  color: #ededed;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  font-size: 18px;
  margin-bottom: 25px;
`;

const CloseButton = styled.button`
  background: #00abf0;
  border: none;
  border-radius: 12px;
  padding: 16px 22px;
  font-size: 16px;
  color: #081b29;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #0094d8;
  }
`;

export default Modal;
