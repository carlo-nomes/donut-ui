import { ColorPreset } from './Types';

const shadesBase = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const getShades = (color: ColorPreset): { [key: number]: string } => {
  return shadesBase.reduce((acc, curr) => {
    const cssVar = `var(--colors-${color}-${curr})`;
    return { ...acc, [curr]: cssVar };
  }, {});
};

export { getShades };
