import { MouseEventHandler } from 'react';
import styled from 'styled-components';

type ModalProps = {
  isOpen: boolean;
  handleClose: MouseEventHandler<HTMLDivElement>;
};

const Modal = ({ isOpen, handleClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Backdrop>
      <Wrapper onClick={(e) => e.stopPropagation()}>
        <Sentence>아직 지원 링크가 공개되지 않았어요.</Sentence>
        <Line />
        <Close onClick={handleClose}>닫기</Close>
      </Wrapper>
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const Wrapper = styled.div`
  width: 300px;
  height: 158px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.grey03};
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 110;
`;

const Sentence = styled.div`
  ${({ theme }) => theme.fonts.content03};
  color: ${({ theme }) => theme.colors.grey01};
  margin-top: 48px;
  margin-bottom: 42px;
`;

const Line = styled.div`
  width: 265px;
  height: 0px;
  flex-shrink: 0;
  border: 1px solid var(--green02, #719788);
  margin-bottom: 13px;
  padding: 0 17px;
`;

const Close = styled.div`
  ${({ theme }) => theme.fonts.content03};
  color: ${({ theme }) => theme.colors.grey02};
  cursor: pointer;
`;
