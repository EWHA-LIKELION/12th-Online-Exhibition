import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
`;

export const Title = styled.div`
  margin: 10rem auto auto 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Arrow = styled.div`
  position: absolute;
  left: 50%;
  bottom: 2.5rem;
  transform: translateX(-50%);
  z-index: 1;
`;

export const Background = styled.div`
  position: absolute;
  left: 70%;
  bottom: 2.2rem;
  transform: translateX(-50%);

  @media (max-height: 744px) {
    svg {
      width: 32rem;
      height: 32rem;
      flex-shrink: 0;
    }
  }
`;
