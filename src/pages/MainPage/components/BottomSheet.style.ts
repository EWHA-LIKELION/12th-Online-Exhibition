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
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  height: 90vh;
  padding: 2rem 1.6rem;

  border-radius: 0.625rem 0.625rem 0rem 0rem;
  background-color: ${(props) => props.theme.colors.grey03};
  box-shadow: 0px -4px 15px 0px rgba(0, 0, 0, 0.25);
  will-change: transform;
`;

export const HandlerContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  width: 100%;

  svg {
    transform: rotate(180deg);
  }
`;
