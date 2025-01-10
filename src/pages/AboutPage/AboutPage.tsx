import { useState } from 'react';
import * as S from './AboutPage.style';

import about from 'assets/images/about/about.png';
import { curriculumList, activityList } from 'assets/data/aboutData';
import Header from '_common/Header';

const AboutPage = () => {
  const [selectedPartId, setSelectedPartId] = useState(1);
  const selectedPart = curriculumList.find((part) => part.id === selectedPartId);
  const commonList = ['HTML&CSS', 'Figma', 'Git&Github'];
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>ABOUT US</S.Title>
        <S.Img src={about} />
        <S.IntroTop>
          <span className="ment"> 활동기간</span>
          <span className="period">2024.02 - 2025.01</span>
        </S.IntroTop>
        <S.Intro>
          GROWL TO WORLD🦁 멋쟁이사자처럼은
          <br />
          국내외 00개 대학, 약 00명이 활동하는
          <br />
          국내 최대 규모의 IT 창업 연합 동아리입니다.
          <br />
          이화여대 멋쟁이사자처럼 12기는 9명의 운영진과
          <br />
          17명의 아기사자들이 기획디자인, 프론트엔드,
          <br />
          백엔드의 세 파트로 나누어 활동했습니다.
        </S.Intro>

        <S.SubTitle>
          <span>COMMON CURRICULUM</span>
          <span className="plus">* 12기 기준</span>
        </S.SubTitle>

        <S.ChipBox>
          {commonList.map((content, index) => (
            <S.Chip key={index}>{content}</S.Chip>
          ))}
        </S.ChipBox>

        <S.SubTitle>
          {curriculumList.map((curr) => (
            <S.Tab
              selected={selectedPartId === curr.id}
              onClick={() => setSelectedPartId(curr.id)}
            >
              {curr.part}
            </S.Tab>
          ))}
        </S.SubTitle>
        <S.ChipBox>
          {selectedPart?.content.map((content) => (
            <S.Chip key={content.id}>{content.session}</S.Chip>
          ))}
        </S.ChipBox>

        <S.SubTitle>
          <span>ACTIVITY RECORD</span>
        </S.SubTitle>
        <S.LineBox>
          {activityList.map((data) => (
            <S.Line>
              <span>{data.activity}</span>
              <span className="period">{data.period}</span>
            </S.Line>
          ))}
        </S.LineBox>
        <S.ApplyBtn>멋사 13기 지원하러 가기</S.ApplyBtn>
      </S.Container>
    </>
  );
};

export default AboutPage;
