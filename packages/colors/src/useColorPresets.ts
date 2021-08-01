export type ColorPreset =
  | 'gray'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger';

export enum Shade {
  'S100' = '100',
  'S200' = '200',
  'S300' = '300',
  'S400' = '400',
  'S500' = '500',
  'S600' = '600',
  'S700' = '700',
  'S800' = '800',
  'S900' = '900',
}

export type ShadeObj = { [key in Shade]: string };

const getShades = (color: ColorPreset) => {
  return Object.values(Shade).reduce((acc, curr) => {
    const cssVar = `var(--colors-${color}-${curr})`;
    return { ...acc, [curr]: cssVar };
  }, {}) as ShadeObj;
};

const useColorPresets = (color: ColorPreset) => {
  switch (color) {
    case 'gray':
      return { color: 'var(--colors-gray)', shades: getShades(color) };
    case 'primary':
      return { color: 'var(--colors-primary)', shades: getShades(color) };
    case 'secondary':
      return { color: 'var(--colors-secondary)', shades: getShades(color) };
    case 'warning':
      return { color: 'var(--colors-warning)', shades: getShades(color) };
    case 'danger':
      return { color: 'var(--colors-danger)', shades: getShades(color) };
  }
};

export default useColorPresets;
