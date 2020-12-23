export type Color = 'primary' | 'secondary' | 'warning' | 'danger' | string;

const useColorPresets = (color?: Color) => {
  switch (color) {
    case 'primary':
      return 'var(--colors-primary)';
    case 'secondary':
      return 'var(--colors-secondary)';
    case 'warning':
      return 'var(--colors-warning)';
    case 'danger':
      return 'var(--colors-danger)';
    case 'default':
      return 'var(--colors-text)';
    default:
      return color;
  }
};

export default useColorPresets;
