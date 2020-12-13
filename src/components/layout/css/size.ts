import { css } from 'styled-components';

export type SizeProps = {
  size?: string | number;
  width?: string | number;
  height?: string | number;
};

const DEFAULT_SIZE = '100%';
function get(key: 'width' | 'height') {
  return (props: SizeProps): string => {
    if (typeof props[key] === 'number') return `${props[key]}rem`;
    if (typeof props[key] === 'string') return props[key] as string;
    if (typeof props.size === 'number') return `${props.size}rem`;
    if (typeof props.size === 'string') return props.size;
    return DEFAULT_SIZE;
  };
}

const size = css<SizeProps>`
  box-sizing: border-box;
  width: ${get('width')};
  height: ${get('height')};
`;

export default size;
