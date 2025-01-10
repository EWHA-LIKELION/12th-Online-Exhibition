import React from 'react';
import * as S from '../ProjectPage.style';

interface MembersSectionProps {
  icon: React.ReactNode;
  members: string[];
}

const MembersSection = ({ icon, members }: MembersSectionProps) => {
  return (
    <S.MemberSection>
      {icon}
      <S.Member count={members.length}>
        {members.map((member, index) => (
          <span key={index}>{member}</span>
        ))}
      </S.Member>
    </S.MemberSection>
  );
};

export default MembersSection;
