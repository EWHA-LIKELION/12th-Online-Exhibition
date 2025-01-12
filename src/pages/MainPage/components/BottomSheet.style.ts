import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(18, 18, 18, 0.2);
`;

export const Container = styled(motion.div)`
  position: fixed;
  z-index: 15;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  overflow: scroll;

  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background-color: ${(props) => props.theme.colors.grey03};
  box-shadow: 0px -4px 15px 0px rgba(0, 0, 0, 0.25);
  will-change: transform;
`;

export const HandlerContainer = styled.div`
  padding: 4.5rem 0 7.5rem;
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    transform: rotate(180deg);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 425px;
  width: 100%;
  padding: 0 2.5rem;

  li {
    ${({ theme }) => theme.fonts.header01}
    cursor: pointer;
  }
`;
