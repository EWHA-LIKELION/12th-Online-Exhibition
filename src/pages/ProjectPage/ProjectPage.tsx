import React, { useState } from 'react';
import * as S from './ProjectPage.style';

const ProjectPage = () => {
  const ctgryList = ['I WANT IT!', '깨비', 'MoY'];
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  return (
    <>
      <S.TitleBox>
        <S.Title>GRADUATION</S.Title>
        <S.CategoryBox>
          {ctgryList.map((category, index) => (
            <S.Category
              key={index}
              onClick={() => setSelectedChip(category)}
              className={selectedChip === category ? 'selected' : ''}
            >
              {category}
            </S.Category>
          ))}
        </S.CategoryBox>
      </S.TitleBox>
    </>
  );
};

export default ProjectPage;
