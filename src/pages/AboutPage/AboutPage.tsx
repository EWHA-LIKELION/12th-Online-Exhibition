import React, { useState } from "react";
import * as S from "./AboutPage.style";

const AboutPage: React.FC = () => {
  const ctgryList = ["PM-DESIGN", "FRONT-END", "BACK-END"];
  const [selectedChip, setSelectedChip] = useState<string | null>(null);

  return (
    <>
      <S.TitleBox>
        <S.Title>GRADUATION</S.Title>
        <S.Img />
      </S.TitleBox>
      <S.ContentBox>
        <div className="top">
          <p> 활동기간</p>
          <p>2024.02 - 2025.01</p>
        </div>
        <S.Contents>
          GROWL TO WORLD🦁 멋쟁이사자처럼은 국내외 00개 대학, 약 00명이 활동하는
          국내 최대 규모의 IT 창업 연합 동아리입니다. 이화여대 멋쟁이사자처럼
          12기는 9명의 운영진과 17명의 아기사자들이 기획디자인, 프론트엔드,
          백엔드의 세 파트로 나누어 활동했습니다.
        </S.Contents>
      </S.ContentBox>
      <S.Category>COMMON CURRICULUM</S.Category>

      <S.CategoryBox>
        {ctgryList.map((category, index) => (
          <S.Chip
            key={index}
            onClick={() => setSelectedChip(category)}
            className={selectedChip === category ? "selected" : ""}
          >
            {category}
          </S.Chip>
        ))}
      </S.CategoryBox>
    </>
  );
};

export default AboutPage;
