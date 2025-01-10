import React from 'react';
import * as S from '../ProjectPage.style';

interface TabsProps {
  projectList: { id: number; name: string }[];
  selectedProjId: number;
  setSelectedProjId: (id: number) => void;
  isKR: (text: string) => boolean;
}

const Tabs = ({ projectList, selectedProjId, setSelectedProjId, isKR }: TabsProps) => {
  return (
    <S.TabContainer>
      {projectList.map((proj) => (
        <S.Tab
          key={proj.id}
          onClick={() => setSelectedProjId(proj.id)}
          className={isKR(proj.name) ? 'kor' : 'eng'}
          selected={selectedProjId === proj.id}
        >
          {proj.name}
        </S.Tab>
      ))}
    </S.TabContainer>
  );
};

export default Tabs;
