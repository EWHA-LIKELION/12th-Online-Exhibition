import * as S from '../AboutPage.style';

const CommonCurriculum = () => {
  const commonList = ['HTML&CSS', 'Figma', 'Git&Github'];

  return (
    <>
      <S.SubTitle>
        <span>COMMON CURRICULUM</span>
        <span className="plus">* 12기 기준</span>
      </S.SubTitle>
      <S.ChipBox>
        {commonList.map((content, index) => (
          <S.Chip key={index}>{content}</S.Chip>
        ))}
      </S.ChipBox>
    </>
  );
};

export default CommonCurriculum;
