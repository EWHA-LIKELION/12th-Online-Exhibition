import { useDragControls, PanInfo } from 'framer-motion';
import * as S from './BottomSheet.style';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomSheet = ({ isOpen, onClose }: BottomSheetProps) => {
  const dragControls = useDragControls();

  const handleDragEnd = (_event: PointerEvent, info: PanInfo) => {
    const OFFSET_THRESHOLD = 150;
    const DELTA_THRESHOLD = 5;
    const isOverOffset = Math.abs(info.offset.y) > OFFSET_THRESHOLD;
    const isOverDelta = Math.abs(info.delta.y) > DELTA_THRESHOLD;
    if (!isOverOffset && !isOverDelta) return;

    const newIsOpened = info.offset.y < 0;
    if (!newIsOpened) {
      onClose();
    }
  };

  const handleOverlayTap = () => {
    onClose();
  };

  return (
    <>
      <S.Container
        initial="default"
        animate={isOpen ? 'opened' : 'closed'}
        variants={{
          opened: { top: `10vh` },
          closed: { top: '100vh' },
        }}
        transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
        drag="y"
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
      >
        <S.HandlerContainer onPointerDown={(e) => dragControls.start(e)}>
          <Arrow />
        </S.HandlerContainer>
        <ul>
          <li>ABOUT US</li>
          <li>HACKATHON</li>
          <li>GRADUATION</li>
          <li>OUR STORY</li>
          <li>CREDITS</li>
        </ul>
      </S.Container>
      <S.Overlay
        initial={false}
        animate={isOpen ? 'opened' : 'closed'}
        variants={{
          opened: {
            pointerEvents: 'all',
            opacity: 0.7,
            display: 'block',
          },
          closed: {
            pointerEvents: 'none',
            opacity: 0,
            display: 'none',
          },
        }}
        transition={{ duration: 0.3 }}
        onClick={handleOverlayTap}
      />
    </>
  );
};

export default BottomSheet;
