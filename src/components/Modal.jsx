import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Portal = ({ children }) => {
    const modalRoot = document.getElementById('modal');
    return createPortal(children, modalRoot);
};

export const Modal = ({ children, toggle, open, closeButton, background }) => (
    <Portal>
        {open && (
            <ModalWrapper className>
                <ModalCard className="card">
                    <div className="card-content">
                        {closeButton && (
                            <CloseButton onClick={toggle}>
                                <span className="icon icon-hover">
                                    <i className="material-icons">close</i>
                                </span>
                            </CloseButton>
                        )}
                        {children}
                    </div>
                </ModalCard>
                <Background onClick={() => background && toggle()} />
            </ModalWrapper>
        )}
    </Portal>
);
export default Modal;

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
`;
const ModalCard = styled.div`
    position: relative;
    min-width: 350px;
    max-width: 350px;
    max-height: 95vh;
    min-height: 0vh;
    z-index: 10;
    background: white;
    border-radius: 5px;
    padding: 15px;
    overflow-y: scroll;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    @media (max-width: 768px) {
        min-width: 95vw;
        max-width: 95vw;
    }
`;
const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: transparent;
    padding: 10px;
    &:hover {
        cursor: pointer;
    }
`;
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.5;
`;
