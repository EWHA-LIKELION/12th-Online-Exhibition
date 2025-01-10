import * as S from '../AboutPage.style';

interface Activity {
  activity: string;
  period: string;
}

interface ActivityRecordProps {
  activityList: Activity[];
}

const ActivityRecord: React.FC<ActivityRecordProps> = ({ activityList }) => {
  return (
    <>
      <S.SubTitle>
        <span>ACTIVITY RECORD</span>
      </S.SubTitle>
      <S.LineBox>
        {activityList.map((data, index) => (
          <S.Line key={index}>
            <span>{data.activity}</span>
            <span className="dashed"> </span>
            <span className="period">{data.period}</span>
          </S.Line>
        ))}
      </S.LineBox>
    </>
  );
};

export default ActivityRecord;
