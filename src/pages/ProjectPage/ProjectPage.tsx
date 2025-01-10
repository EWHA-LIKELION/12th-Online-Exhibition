import { useState } from 'react';
import * as S from './ProjectPage.style';
import { useParams } from 'react-router-dom';
import { gradProjectList, hackProjectList } from 'assets/data/projectData';
import { ReactComponent as Pmdesign } from 'assets/icons/pmdesign.svg';
import { ReactComponent as Frontend } from 'assets/icons/frontend.svg';
import { ReactComponent as Backend } from 'assets/icons/backend.svg';

const ProjectPage = () => {
  const { type } = useParams<{ type: string }>();
  const [selectedProjId, setSelectedProjId] = useState<number>(1);

  const projectList = type === 'hackathon' ? hackProjectList : gradProjectList;
  const selectedProj = projectList.find((project) => project.id === selectedProjId);

  const title = type?.toUpperCase();

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.TabContainer>
        {projectList.map((proj) => (
          <S.Tab key={proj.id} onClick={() => setSelectedProjId(proj.id)}>
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
              <S.Member>{selectedProj.members.pmdesign.join(', ')}</S.Member>
            </S.MemberSection>
            <S.MemberSection>
              <Frontend />
              <S.Member>{selectedProj.members.frontend.join(', ')}</S.Member>
            </S.MemberSection>
            <S.MemberSection>
              <Backend />
              <S.Member>{selectedProj.members.backend.join(', ')}</S.Member>
            </S.MemberSection>
          </S.Members>

          <S.Links>
            {selectedProj.github && <S.Git>깃허브 보러 가기</S.Git>}
            {selectedProj.website && <S.Site>사이트 보러 가기</S.Site>}
          </S.Links>
        </S.Content>
      )}
    </S.Container>
  );
};

export default ProjectPage;
