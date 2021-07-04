import GlobalDecorator from './decorators/GlobalDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(color)$/i,
    },
  },
};

export const decorators = [GlobalDecorator];
