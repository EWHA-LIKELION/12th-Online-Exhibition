import * as S from './ProjectPage.style';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { gradProjectList, hackProjectList } from 'assets/data/projectData';
import Header from '_common/Header';
import Tabs from './components/Tabs';
import ProjectContent from './components/ProjectContent';

const ProjectPage = () => {
  const { type } = useParams<{ type: string }>();
  const [selectedProjId, setSelectedProjId] = useState<number>(1);

  const projectList = type === 'hackathon' ? hackProjectList : gradProjectList;
  const selectedProj = projectList.find((project) => project.id === selectedProjId);

  const title = type?.toUpperCase();
  const isKR = (text: string) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text);

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>{title}</S.Title>
        <Tabs
          projectList={projectList}
          selectedProjId={selectedProjId}
          setSelectedProjId={setSelectedProjId}
          isKR={isKR}
        />
        {selectedProj && <ProjectContent project={selectedProj} />}
      </S.Container>
    </>
  );
};

export default ProjectPage;
