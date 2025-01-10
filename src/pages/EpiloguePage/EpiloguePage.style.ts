import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px 23px 0 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin-bottom: 35px;
  width: 100%;
  text-align: start;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.header01};
`;

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  justify-content: start;
`;

export const Category = styled.div<{ isSelected: boolean }>`
  padding: 0;
  position: relative;
  display: inline-block;

  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  ${({ theme }) => theme.fonts.basic};

  cursor: pointer;

  span {
    padding: 0;
    position: relative;
    display: inline-block;
    z-index: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 105%;
    height: 15px;
    background: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.green02 : 'transparent'};
    z-index: 0;
    flex-shrink: 0;
  }
`;

export const Container2 = styled.div`
  margin-top: 30px;
  margin-bottom: 133px;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Box = styled.div`
  padding: 13px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 50px;
  flex-shrink: 0;
  border: 1px dashed ${({ theme }) => theme.colors.black};

  #info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  #closed {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.content01};
`;

export const Dep = styled.div`
  color: ${({ theme }) => theme.colors.grey02};
  ${({ theme }) => theme.fonts.content04};
`;

export const Content = styled.div`
  margin-top: 13px;
  padding-top: 13px;

  border-top: 1px solid ${({ theme }) => theme.colors.grey02};
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.content03};

  white-space: pre-line;
`;
