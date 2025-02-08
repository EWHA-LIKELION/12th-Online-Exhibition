import { useState } from 'react';
import * as S from './AboutPage.style';

// assets
import { curriculumList, activityList } from 'assets/data/aboutData';
import about from 'assets/images/about/about.png';

// components
import Header from '_common/Header';
import ActivityRecord from './components/ActivityRecord';
import CommonCurriculum from './components/CommonCurriculum';
import Modal from './components/Modal';
import Footer from '_common/Footer';

const AboutPage = () => {
  const [selectedPartId, setSelectedPartId] = useState(1);
  const selectedPart = curriculumList.find((part) => part.id === selectedPartId);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>ABOUT US</S.Title>
        <S.Img src={about} />
        <S.IntroTop>
          <span className="ment"> 활동 기간</span>
          <span className="period">2024.02 - 2025.01</span>
        </S.IntroTop>
        <S.Intro>
          GROWL TO WORLD🦁 멋쟁이사자처럼은
          <br />
          국내외 121개 대학, 약 4천여 명이 활동하는
          <br />
          국내 최대 규모의 IT 창업 연합 동아리입니다.
          <br />
          이화여대 멋쟁이사자처럼 12기는 9명의 운영진과
          <br />
          17명의 아기사자들이 기획디자인, 프론트엔드,
          <br />
          백엔드의 세 파트로 나누어 활동했습니다.
        </S.Intro>

        <CommonCurriculum />

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
            <S.Chip key={content.id} current={selectedPartId}>
              {content.session}
            </S.Chip>
          ))}
        </S.ChipBox>

        <ActivityRecord activityList={activityList} />
        <S.ApplyBtn onClick={() => (window.location.href = "https://plucky-beryl-19c.notion.site/13-18dcc780cd7d8081b9ded0b922de2242")}>
          멋사 13기 지원하러 가기
        </S.ApplyBtn>
        <Footer />
      </S.Container>
      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default AboutPage;
