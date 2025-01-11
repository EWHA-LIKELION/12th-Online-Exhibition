import * as S from './CreditsPage.style';
import Header from '_common/Header';

const CreditsPage = () => {
  const makers = [
    {
      id: 1,
      name: 'gayoung kim',
      part: 'pm·design',
      width: 217,
    },
    {
      id: 2,
      name: 'jihye byeon',
      part: 'front-end',
      width: 206,
    },
    {
      id: 3,
      name: 'seoyeon yu',
      part: 'front-end',
      width: 201,
    },
    {
      id: 4,
      name: 'jiwon choi',
      part: 'front-end',
      width: 196,
    },
    {
      id: 5,
      name: 'kyubin jin',
      part: 'front-end',
      width: 196,
    },
  ];

  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Title>CREDITS</S.Title>
        <S.Container>
          {makers.map((data, index) => (
            <S.Member>
              <div className="name">{data.name}</div>
              <div className="part">{data.part}</div>
              <S.Frame className={index % 2 === 0 ? 'odd' : 'even'} width={data.width} />
            </S.Member>
          ))}
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CreditsPage;
