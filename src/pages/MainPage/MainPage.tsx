import styled from 'styled-components';

const MainPage = () => (
  <>
    <TobBox>
      <Title>12th</Title>
      <Title>LIKELION</Title>
      <School>@EWHA W. UNIV.</School>
    </TobBox>
  </>
);

export default MainPage;

const TobBox = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
  font: ${({ theme }) => theme.fonts.header01};
`;

const School = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.green01};
  color: ${({ theme }) => theme.colors.white};
`;
