import * as S from './ProjectPage.style';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// data
import { gradProjectList, hackProjectList } from 'assets/data/projectData';

// icons
import { ReactComponent as Pmdesign } from 'assets/icons/pmdesign.svg';
import { ReactComponent as Frontend } from 'assets/icons/frontend.svg';
import { ReactComponent as Backend } from 'assets/icons/backend.svg';

const ProjectPage = () => {
  const { type } = useParams<{ type: string }>(); // hackathon or graduation
  const [selectedProjId, setSelectedProjId] = useState<number>(1); // 탭에서 선택한 project

  const projectList = type === 'hackathon' ? hackProjectList : gradProjectList;
  const selectedProj = projectList.find((project) => project.id === selectedProjId);

  const title = type?.toUpperCase();
  const isKR = (text: string) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.CloseBtn onClick={() => navigate('/')} />
      <S.Title>{title}</S.Title>
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

      {selectedProj && (
        <S.Content>
          <img src={selectedProj.thumbnail} alt={`${selectedProj.name} thumbnail`} />
          <S.Intro>{selectedProj.intro}</S.Intro>
          <S.Description>{selectedProj.description}</S.Description>

          <S.ImageGallery>
            {selectedProj.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${selectedProj.name} screenshot ${index + 1}`}
              />
            ))}
          </S.ImageGallery>

          <S.Members>
            <S.MemberSection>
              <Pmdesign />
              <S.Member count={selectedProj.members.pmdesign.length}>
                {selectedProj.members.pmdesign.map((member, index) => (
                  <span key={index}>{member}</span>
                ))}
              </S.Member>
            </S.MemberSection>
            <S.MemberSection>
              <Frontend />
              <S.Member count={selectedProj.members.frontend.length}>
                {selectedProj.members.frontend.map((member, index) => (
                  <span key={index}>{member}</span>
                ))}
              </S.Member>
            </S.MemberSection>
            <S.MemberSection>
              <Backend />
              <S.Member count={selectedProj.members.backend.length}>
                {selectedProj.members.backend.map((member, index) => (
                  <span key={index}>{member}</span>
                ))}
              </S.Member>
            </S.MemberSection>
          </S.Members>

          <S.Links>
            {selectedProj.github && (
              <S.Git href={selectedProj.github}>깃허브 보러 가기</S.Git>
            )}
            {selectedProj.website && (
              <S.Site href={selectedProj.website}>사이트 보러 가기</S.Site>
            )}
          </S.Links>
        </S.Content>
      )}
    </S.Container>
  );
};

export default ProjectPage;
