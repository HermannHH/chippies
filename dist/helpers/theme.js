'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  borders: {
    radius: 4
  },
  box: {
    shadow: {
      shallow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      medium: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      deep: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
      ultraDeep: ' 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    }
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  },
  colors: {
    black: {
      '-1': '#333333',
      0: '#000000'
    },
    grey: {
      '-2': '#F2F2F2',
      '-1': '#E5E5E5',
      0: '#A9A9A9',
      1: '#999999',
      2: '#666666'
    },
    white: {
      0: '#FFFFFF',
      1: '#FAFAFA'
    },
    blue: {
      '-1': '#CDDDFF',
      0: '#2A6DE3',
      1: '#2A44B4'
    },
    red: {
      '-1': '#FF94B5',
      0: '#FF0054',
      1: '#C9003D'
    },
    purple: {
      '-1': '#D5A7FF',
      0: '#8C00F5',
      1: '#7800B6'
    },
    ocean: {
      '-1': '#CAF1FF',
      0: '#00BBFF',
      1: '#0072BD'
    },
    yellow: {
      '-1': '#FFD857',
      0: '#FFB500'
    },
    green: {
      0: '#00A39E'
    }
  },
  font: {
    family: '\'Roboto\', sans-serif',
    weight: {
      bold: 500,
      semiBold: 400,
      standard: 300,
      thin: 100
    }
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '3rem'
  }
};