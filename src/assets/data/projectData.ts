// hackathon
import hack1_thumbnail from 'assets/images/hackathon/hack1/hack1_thumbnail.png';
import hack1_1 from 'assets/images/hackathon/hack1/hack1_1.png';
import hack1_2 from 'assets/images/hackathon/hack1/hack1_2.png';
import hack1_3 from 'assets/images/hackathon/hack1/hack1_3.png';
import hack1_4 from 'assets/images/hackathon/hack1/hack1_4.png';
import hack1_5 from 'assets/images/hackathon/hack1/hack1_5.png';
import hack1_6 from 'assets/images/hackathon/hack1/hack1_6.png';
import hack1_7 from 'assets/images/hackathon/hack1/hack1_7.png';
import hack1_8 from 'assets/images/hackathon/hack1/hack1_8.png';

import hack2_thumbnail from 'assets/images/hackathon/hack2/hack2_thumbnail.png';
import hack2_1 from 'assets/images/hackathon/hack2/hack2_1.png';
import hack2_2 from 'assets/images/hackathon/hack2/hack2_2.png';
import hack2_3 from 'assets/images/hackathon/hack2/hack2_3.png';

import hack3_thumbnail from 'assets/images/hackathon/hack3/hack3_thumbnail.png';
import hack3_1 from 'assets/images/hackathon/hack3/hack3_1.png';
import hack3_2 from 'assets/images/hackathon/hack3/hack3_2.png';
import hack3_3 from 'assets/images/hackathon/hack3/hack3_3.png';
import hack3_4 from 'assets/images/hackathon/hack3/hack3_4.png';
import hack3_5 from 'assets/images/hackathon/hack3/hack3_5.png';

// graduation
import grad1_thumbnail from 'assets/images/graduation/grad1/grad1_thumbnail.png';
import grad1_1 from 'assets/images/graduation/grad1/grad1_1.png';
import grad1_2 from 'assets/images/graduation/grad1/grad1_2.png';
import grad1_3 from 'assets/images/graduation/grad1/grad1_3.png';

import grad2_thumbnail from 'assets/images/graduation/grad2/grad2_thumbnail.png';
import grad2_1 from 'assets/images/graduation/grad2/grad2_1.png';
import grad2_2 from 'assets/images/graduation/grad2/grad2_2.png';
import grad2_3 from 'assets/images/graduation/grad2/grad2_3.png';
import grad2_4 from 'assets/images/graduation/grad2/grad2_4.png';
import grad2_5 from 'assets/images/graduation/grad2/grad2_5.png';

import grad3_thumbnail from 'assets/images/graduation/grad3/grad3_thumbnail.png';
import grad3_1 from 'assets/images/graduation/grad3/grad3_1.png';
import grad3_2 from 'assets/images/graduation/grad3/grad3_2.png';
import grad3_3 from 'assets/images/graduation/grad3/grad3_3.png';
import grad3_4 from 'assets/images/graduation/grad3/grad3_4.png';
import grad3_5 from 'assets/images/graduation/grad3/grad3_5.png';

export type ProjectType = {
  id: number;
  title: string;
  image: string;
};

export const hackProjectList = [
  {
    id: 1,
    name: '메디캐리어',
    thumbnail: hack1_thumbnail,
    intro: '해외 여행 의료 서비스 도우미',
    description: `여행을 가서 아프게 되어 곤란했던 경험이 있나요? 
메디캐리어는 해외 여행의 전, 중, 후를 케어해주는 의료 서비스 도우미예요. 어시스트를 통해 의료 
시설을 추천 받고, 의료진에게 보여줄 스크립트를 
제작하며, 발급 받을 서류 리스트를 확인할 수 있어요. 
또한 응급 상황 시 의료 카드를 활용하여 의료 정보를 번역해 의료진에게 제공하며, 검색 기능을 활용하여 의료 시설을 찾을 수 있어요. 당신이 어딜 가든 곁을 지키는 메디캐리어, 꼭 들고 가세요!`,
    images: [hack1_1, hack1_2, hack1_3, hack1_4, hack1_5, hack1_6, hack1_7, hack1_8],
    github: 'https://github.com/Medi-Carrier',
    website: 'https://medi-carrier.vercel.app/',
    members: {
      pmdesign: ['김도연', '유하은'],
      frontend: ['남선우'],
      backend: ['박민서', '황지은'],
    },
  },
  {
    id: 2,
    name: 'STEW',
    thumbnail: hack2_thumbnail,
    intro: 'stay tewgether, stew',
    description: `우리 가족, 멀리 있어도 마음은 가까이
stay tewgether,
stew
    
영혼을 위한 닭고기 수프라는 소설을 아시나요?
"닭고기 스튜에 가족의 애정이 담겨있었다"라는 
소절이 있는데요,
우리 가족이 멀리 떨어져 있더라도 
마음만은 가까이 있기를 바라는 마음에서 
스튜를 기획하게 되었습니다.

스튜는 가족 간에 부담스럽지 않게, 민망하지 않게 
서로를 생각하는 마음을 표현할 수 있고,
가족과 실제로 연락할 수 있도록 독려합니다.`,
    images: [hack2_1, hack2_2, hack2_3],
    github: 'https://github.com/soli-ziyo/Stew',
    website: 'https://stew-s-uxuns-projects.vercel.app/',
    members: {
      pmdesign: ['김가을', '장예원'],
      frontend: ['김민서', '송유선'],
      backend: ['김민솔', '이정은'],
    },
  },
  {
    id: 3,
    name: '드링킷',
    thumbnail: hack3_thumbnail,
    intro: '즐겁고 건강한 음주목표 달성 서비스',
    description: `음주, 혼자여도, 함께여도 즐겁고 건강하게! 
드링킷은 친구와 함께 음주목표를 세우고
즐겁게 목표를 달성할 수 있는 서비스입니다. 
사용자는 달별 음주 목표를 잔 단위로 설정하고 
목표치까지 얼마나 남았는지 확인할 수 있으며, 
친구의 달성률을 확인하고 응원을 보낼 수 있습니다. 
취함 정도 테스트는 산수 문제를 통해 취한 정도를 
체크하고 정상 간 타이머를 통해서 잦은 음주를 
예방할 수 있습니다. 드링킷을 통해 건강한 음주 
문화를 만들어봐요!`,
    images: [hack3_1, hack3_2, hack3_3, hack3_4, hack3_5],
    github: 'https://github.com/Drinkit-BingBong',
    website: 'https://drinkit.vercel.app/',
    members: {
      pmdesign: ['백지원', '최예은'],
      frontend: ['김예원', '김채연'],
      backend: ['유지민', '이라령'],
    },
  },
];

export const gradProjectList = [
  {
    id: 1,
    name: 'i want it!',
    thumbnail: grad1_thumbnail,
    intro: '네 취향을 담아, 프라이빗 위시리스트',
    description: `친구 생일, 연말, 센스있게 선물하고 싶은데 무엇을 
줘야 할지 고민해 보신 적 있으신가요?
IWANT IT은 주는 사람과 받는 사람 모두를 행복하게 만들어 주는 프라이빗 위시리스트 서비스입니다.
이젠 원하는 선물을 당당하게 말해봐요.

I WANT IT!`,
    images: [grad1_1, grad1_2, grad1_3],
    github: 'https://github.com/Likelion-12th-Capstone-team2/Frontend',
    website: '',
    members: {
      pmdesign: ['유하은', '장예원', '최예은'],
      frontend: ['김예원', '남선우', '송유선'],
      backend: ['김민솔', '박민서', '유지민'],
    },
  },
  {
    id: 2,
    name: '깨비',
    thumbnail: grad2_thumbnail,
    intro: '가구 구성원 간 가사 분배 서비스',
    description: `“우리집 청소는 항상 나만 하는 것 같아요.”
함께 사는 가구원들과 집안일을 골고루 나누고 
싶나요? ‘깨비’는 가구원들과 함께 사용할 수 있는 
가사 분배 서비스예요. 캘린더에서 나와 가구원들의 할 일을 등록하면 홈에서 각 유저의 집안일 진행 현황 및 우리집 집안일 분배 현황을 확인할 수 있어요.
귀여운 캐릭터와 함께 집안일 레벨을 올리며 
우리집을 깨끗하게 유지해봐요!`,
    images: [grad2_1, grad2_2, grad2_3, grad2_4, grad2_5],
    github: 'https://github.com/LikeLion-Kkaebi/Front',
    website: 'kkaebi.site',
    members: {
      pmdesign: ['김가을', '김도연', '백지원'],
      frontend: ['김민서', '김채연'],
      backend: ['이라령', '이정은', '황지은'],
    },
  },
  {
    id: 3,
    name: 'MOY',
    thumbnail: grad3_thumbnail,
    intro: '감각적인 연말 결산 서비스를 찾는다면, MoY',
    description: `우리가 한 해 동안 즐긴 문화와 일상 속 순간들을 
놓치고 싶지 않다면, MoY와 함께하세요!
MoY는 당신의 한 해를 감각적으로 기록하고 
공유할 수 있는 특별한 공간입니다.

다채로운 인터랙션과 함께 새로운 연말 결산을
시작해보세요!`,
    images: [grad3_1, grad3_2, grad3_3, grad3_4, grad3_5],
    github: 'https://github.com/12th-EWHA-LIKELION-DEMODAY/FE',
    website: 'https://www.moymoy.site',
    members: {
      pmdesign: ['김가영', '김지형'],
      frontend: ['변지혜', '유서연', '진규빈', '최지원'],
      backend: ['심예원', '이다빈', '허채린'],
    },
  },
];
