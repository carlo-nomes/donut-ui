import GlobalDecorator from './decorators/GlobalDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [GlobalDecorator];
