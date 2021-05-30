export type ColorPreset =
  | 'gray'
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger';

const shadesBase = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const getShades = (color: ColorPreset): { [key: number]: string } => {
  return shadesBase.reduce((acc, curr) => {
    const cssVar = `var(--colors-${color}-${curr})`;
    return { ...acc, [curr]: cssVar };
  }, {});
};

const useColorPresets = (color: ColorPreset | string) => {
  if (!color && process.env.NODE_ENV === 'development') {
    console.warn('Invalid value passed to useColorPresets hook!');
  }

  switch (color) {
    case 'gray':
      return { color: 'var(--color-gray)', shades: getShades(color) };
    case 'primary':
      return { color: 'var(--colors-primary)', shades: getShades(color) };
    case 'secondary':
      return { color: 'var(--colors-secondary)', shades: getShades(color) };
    case 'warning':
      return { color: 'var(--colors-warning)', shades: getShades(color) };
    case 'danger':
      return { color: 'var(--colors-danger)', shades: getShades(color) };
    default:
      return { color: color };
  }
};

export default useColorPresets;
