import React from 'react';
import * as S from '../ProjectPage.style';
import MembersSection from './MembersSection';
import { ReactComponent as Pmdesign } from 'assets/icons/pmdesign.svg';
import { ReactComponent as Frontend } from 'assets/icons/frontend.svg';
import { ReactComponent as Backend } from 'assets/icons/backend.svg';

interface ProjectContentProps {
  project: {
    thumbnail: string;
    intro: string;
    description: string;
    images: string[];
    members: {
      pmdesign: string[];
      frontend: string[];
      backend: string[];
    };
    github?: string;
    website?: string;
  };
}

const ProjectContent = ({ project }: ProjectContentProps) => {
  const isVideo = project.thumbnail.endsWith('.mp4');

  return (
    <S.Content>
      {isVideo ? (
        <video controls width="100%" autoPlay loop muted>
          <source src={project.thumbnail} type="video/mp4" />
        </video>
      ) : (
        <img src={project.thumbnail} />
      )}
      <S.Intro>{project.intro}</S.Intro>
      <S.Description>{project.description}</S.Description>

      <S.ImageGallery>
        {project.images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </S.ImageGallery>

      <S.Members>
        <MembersSection icon={<Pmdesign />} members={project.members.pmdesign} />
        <MembersSection icon={<Frontend />} members={project.members.frontend} />
        <MembersSection icon={<Backend />} members={project.members.backend} />
      </S.Members>

      <S.Links>
        {project.github && <S.Git href={project.github}>깃허브 보러 가기</S.Git>}
        {project.website && <S.Site href={project.website}>사이트 보러 가기</S.Site>}
      </S.Links>
    </S.Content>
  );
};

export default ProjectContent;
