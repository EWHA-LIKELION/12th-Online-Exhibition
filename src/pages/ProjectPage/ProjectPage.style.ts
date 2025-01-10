import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.header01};
  margin-top: 2.63rem;
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  margin-top: 2rem;
`;

export const Tab = styled.div`
  ${({ theme }) => theme.fonts.header03};
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
  height: 33px;
  border: 1px solid ${({ theme }) => theme.colors.grey01};
  margin-bottom: 15px;
`;

export const Member = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.fonts.content03}
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  gap: 20px;
  margin-top: 4.37rem;
  margin-bottom: 5.12rem;
`;

export const Git = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: ${({ theme }) => theme.colors.green01};
  ${({ theme }) => theme.fonts.content02}
`;
