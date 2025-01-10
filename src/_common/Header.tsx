import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Close } from 'assets/icons/close.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Close onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  padding: 84px 28px 42px 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
