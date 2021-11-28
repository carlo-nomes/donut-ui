import { css } from 'styled-components';

export type SizeProps = {
  size?: string | number;
  width?: string | number;
  height?: string | number;
};

function get(key: 'width' | 'height') {
  return (props: SizeProps): string => {
    if (typeof props[key] === 'number') return `${key}: ${props[key]}rem`;
    if (typeof props[key] === 'string') return `${key}: ${props[key]}`;

    if (typeof props.size === 'number') return `${key}: ${props.size}rem`;
    if (typeof props.size === 'string') return `${key}: ${props.size}`;

    return '';
  };
}

const size = css<SizeProps>`
  box-sizing: border-box;
  ${get('width')};
  ${get('height')};
`;

export default size;
