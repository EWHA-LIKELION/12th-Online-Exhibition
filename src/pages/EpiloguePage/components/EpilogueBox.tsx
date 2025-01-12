import React from 'react';
import * as S from '../EpiloguePage.style';
import { EpilogueItemType } from 'assets/data/epilogueData';
import { ReactComponent as Polygon } from 'assets/icons/polygon.svg';

const EpilogueBox = ({
  item,
  isOpen,
  onToggle,
}: {
  item: EpilogueItemType;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <S.Box>
      <div id="closed" onClick={onToggle}>
        <div id="info">
          <S.Name>{item.name}</S.Name>
          <S.Dep>{item.dep}</S.Dep>
        </div>
        <Polygon
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            cursor: 'pointer',
          }}
        />
      </div>
      {isOpen && <S.Content>{item.content}</S.Content>}
    </S.Box>
  );
};

export default EpilogueBox;
