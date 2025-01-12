import { useEffect, useState } from 'react';
import * as S from './MainPage.style';
import { PanInfo } from 'framer-motion';
import BottomSheet from './components/BottomSheet';

import { ReactComponent as Typo01 } from '../../assets/icons/12th.svg';
import { ReactComponent as Typo02 } from '../../assets/icons/likelion.svg';
import { ReactComponent as Univ } from '../../assets/icons/univ.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { ReactComponent as Logo } from '../../assets/icons/likelion-main.svg';

const MainPage = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleClose = () => {
    setIsBottomSheetOpen(false);
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = -50;
    if (info.offset.y < threshold) {
      setIsBottomSheetOpen(true);
    }
  };

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
      <S.DragHandleArea
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
      />

      <BottomSheet isOpen={isBottomSheetOpen} onClose={handleClose} />
    </S.Container>
  );
};

export default MainPage;
