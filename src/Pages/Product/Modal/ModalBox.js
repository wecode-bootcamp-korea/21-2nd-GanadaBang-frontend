import React, { useState } from 'react';
import styled from 'styled-components/macro';

function ModalBox({ product }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ModalBtn onClick={handleModal}>
        {isOpen === false ? 'Open Modal' : 'Opened'}
      </ModalBtn>
      {isOpen === false ? null : (
        <ModalBackdrop onClick={handleModal}>
          <ModalView>
            <div className="close-btn" onClick={handleModal}>
              &times;
            </div>
            <div className="desc">{product.image}</div>
          </ModalView>
        </ModalBackdrop>
      )}
    </>
  );
}
const ModalView = styled.div``;
const ModalBackdrop = styled.button``;

const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;
export default ModalBox;
