import styled from 'styled-components';
import { ReactComponent as CreditsFrame } from 'assets/icons/credits-frame.svg';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 24px;
`;
export const Title = styled.div`
  ${({ theme }) => theme.fonts.header01};
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  margin-top: 67px;
  margin-bottom: 80px;
`;

export const Member = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  position: relative;

  ${({ theme }) => theme.fonts.header02};
  z-index: 10;
  margin-bottom: 80px;

  .name {
    margin-bottom: 8px;
  }

  .part {
    display: flex;
    align-items: center;
    height: 15px;
    background-color: ${({ theme }) => theme.colors.green02};
    padding-bottom: 7px;
  }

  &:nth-child(odd) {
    align-items: flex-start;
    margin-left: 20px;
  }

  &:nth-child(even) {
    align-items: flex-end;
    margin-right: 20px;
  }
`;

export const Frame = styled(CreditsFrame)`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: -1;
  top: -5px;

  &.odd {
    align-items: flex-start;
    left: -20px;
  }

  &.even {
    align-items: flex-end;
    transform: scale(-1, 1);
    right: -20px;
  }
`;
