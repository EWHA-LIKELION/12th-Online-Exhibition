import { useEffect } from 'react';
import * as S from './MainPage.style';

import { ReactComponent as Typo01 } from '../../assets/icons/12th.svg';
import { ReactComponent as Typo02 } from '../../assets/icons/likelion.svg';
import { ReactComponent as Univ } from '../../assets/icons/univ.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Logo } from '../../assets/icons/likelion-main.svg';

const MainPage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <S.Container>
      <S.Title>
        <Typo01 />
        <Typo02 />
        <Univ />
      </S.Title>
      <S.Arrow>
        <Arrow />
      </S.Arrow>
      <S.Background>
        <Logo />
      </S.Background>
    </S.Container>
  );
};

export default MainPage;
