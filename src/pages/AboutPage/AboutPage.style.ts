import styled from 'styled-components';

interface TabProps {
  selected: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.header01};
`;

export const Img = styled.img`
  width: 100%;
  height: 250px;
  flex-shrink: 0;
  margin: 30px 0;
`;

export const IntroTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.content02};

  .ment {
    color: black;
  }
  .period {
    color: ${({ theme }) => theme.colors.grey01};
  }
`;

export const Intro = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.grey01};
  ${({ theme }) => theme.fonts.content02};
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: 50px;
  letter-spacing: 1px;
  gap: 15px;
  ${({ theme }) => theme.fonts.header03};

  .plus {
    ${({ theme }) => theme.fonts.content04};
    color: ${({ theme }) => theme.colors.grey02};
    margin-left: 11px;
  }
`;

// export const Tab = styled.div`
//   cursor: pointer;
//   ${({ theme }) => theme.fonts.header03};
// `;

export const Tab = styled.div<TabProps>`
  ${({ theme }) => theme.fonts.header03};
  cursor: pointer;
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  height: 15px;

  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.green02 : 'transparent'};
  background-size: 100% 15px;
  padding: 2px 0 6px 2px;
`;

export const ChipBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const Chip = styled.div`
  ${({ theme }) => theme.fonts.content02};
  flex-shrink: 1;
  padding: 9px 8px 9px 8px;
  border: 1px dashed var(--black, #121212);
`;

export const LineBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Line = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.content02};

  .period {
    color: ${({ theme }) => theme.colors.grey02};
  }
`;

export const ApplyBtn = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green01};
  ${({ theme }) => theme.fonts.content02};
  color: white;
  margin-top: 70px;
  margin-bottom: 109px;
  cursor: pointer;
`;
