import styled from 'styled-components';

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as HighlightIcon } from 'assets/icons/highlight.svg';

interface TabProps {
  selected: boolean;
}

interface MemberProps {
  count: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
`;

export const CloseBtn = styled(CloseIcon)`
  display: flex;
  cursor: pointer;
  margin-top: 37px;
  margin-right: 1.5rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.header01};
  margin-top: 2.63rem;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  gap: 1.25rem;
  margin-top: 38px;
  z-index: 0;
`;

export const Tab = styled.div<TabProps>`
  ${({ theme }) => theme.fonts.header03};
  cursor: pointer;
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  height: 15px;

  &.kor {
    font-family: 'Noto Sans KR';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  &.eng {
    font-family: 'Bebas Neue';
    letter-spacing: 1px;
    word-spacing: -6px;
  }

  /* background-color: ${({ selected, theme }) =>
    selected ? theme.colors.green02 : 'transparent'}; */
  /* background-size: 100% 15px; */
  padding: 2px 0 6px 2px;

  ${({ selected }) =>
    selected &&
    `
    animation: fill-background 0.5s forwards ease-in-out;
  `}

  @keyframes fill-background {
    from {
      background-position: 0% 0;
      background-size: 0% 15px;
    }
    to {
      background-position: 0% 0;
      background-size: 100% 15px;
      background-color: ${({ selected, theme }) =>
        selected ? theme.colors.green02 : 'transparent'};
    }
  }
`;

export const Highlight = styled(HighlightIcon)`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 15px;
  flex: 1;
  left: 0;
  bottom: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
`;

export const Thumbnail = styled.div`
  width: 100%;
`;

export const Intro = styled.div`
  margin-top: 1.87rem;
  margin-bottom: 1.25rem;
  ${({ theme }) => theme.fonts.content01}
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.colors.grey01};
  ${({ theme }) => theme.fonts.content02}
  white-space: pre-wrap;
`;

export const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 283px;
  margin-top: 2.81rem;
  margin-bottom: 3.12rem;
  gap: 0.94rem;
  overflow-x: scroll;
`;

export const Members = styled.div`
  width: 100%;
`;

export const MemberSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.colors.grey01};
  margin-bottom: 15px;
`;

export const Member = styled.div<MemberProps>`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  ${({ theme }) => theme.fonts.content03}
  justify-content: ${({ count }) => {
    if (count === 1) return 'center';
    return 'space-between';
  }};
  padding: ${({ count }) => {
    if (count === 2) return '0 61px';
    if (count === 3) return '0 31px';
    if (count === 4) return '0 17px';
    return '0';
  }};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  gap: 20px;
  margin-top: 55px;
  margin-bottom: 5.12rem;
`;

export const Git = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.green01};
  color: ${({ theme }) => theme.colors.grey02};
  ${({ theme }) => theme.fonts.content02}
`;

export const Site = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.green01};
  ${({ theme }) => theme.fonts.content02}
`;
