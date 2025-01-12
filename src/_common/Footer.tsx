import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/icons/likelion-icon.svg';
import { ReactComponent as Insta } from 'assets/icons/instagram.svg';
import { ReactComponent as Github } from 'assets/icons/github.svg';

const Footer = () => {
  const logos = [
    { id: 1, logo: Logo, link: 'https://linktr.ee/likelion.ewha' },
    { id: 2, logo: Insta, link: 'https://www.instagram.com/likelion_ewha/' },
    { id: 3, logo: Github, link: 'https://github.com/EWHA-LIKELION' },
  ];

  return (
    <Wrapper>
      <Container>
        {logos.map(({ id, logo: Icon, link }) => (
          <IconWrapper key={id} href={link}>
            <Icon />
          </IconWrapper>
        ))}
      </Container>
      <div className="text">Copyright ⓒ Likelion Ewha 12th. All Rights Reserved.</div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .text {
    color: ${({ theme }) => theme.colors.grey02};
    ${({ theme }) => theme.fonts.content04};
    font-size: 8.32px;
    margin-top: 21.38px;
    margin-bottom: 37.95px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

const IconWrapper = styled.a`
  display: flex;
`;
