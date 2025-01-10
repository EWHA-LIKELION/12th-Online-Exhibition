export const theme = {
  colors: {
    black: '#121212',
    white: '#FFFFFF',
    orange: '#FF7710',
    green01: '#00462A',
    green02: '#719788',
    green03: '#AEC1BA',

    grey01: '#5D5D5D',
    grey02: '#8B8B8B',
    grey03: '#EDEDED',
  },

  fonts: {
    header01: {
      fontFamily: 'Bebas Neue',
      fontSize: '80px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '60px',
      letterSpacing: '1px',
    },
    header02: {
      fontFamily: 'Bebas Neue',
      fontSize: '40px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '60px',
      letterSpacing: '1px',
    },
    header03: {
      fontFamily: 'Bebas Neue',
      fontSize: '30px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: '60px',
      letterSpacing: '1px',
    },
    basic: {
      fontFamily: 'Bebas Neue',
      fontSize: '30px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: '1px',
    },
    content01: {
      fontFamily: 'Noto Sans KR',
      fontSize: '16px',
      fontWeight: 700,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    content02: {
      fontFamily: 'Noto Sans KR',
      fontSize: '16px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    content03: {
      fontFamily: 'Noto Sans KR',
      fontSize: '14px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    content04: {
      fontFamily: 'Noto Sans KR',
      fontSize: '10px',
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
  },
};

export type ColorType = typeof theme.colors;
export type FontType = typeof theme.fonts;
