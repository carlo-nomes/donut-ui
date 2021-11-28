import { css } from 'styled-components';

export type MarginProps = {
  m?: number | 'auto';
  mx?: number | 'auto';
  my?: number | 'auto';
  mt?: number | 'auto';
  mr?: number | 'auto';
  mb?: number | 'auto';
  ml?: number | 'auto';
};
type Position = 'top' | 'right' | 'bottom' | 'left';
const get = (position: Position) => {
  const key = position === 'top' ? 'mt' : position === 'right' ? 'mr' : position === 'bottom' ? 'mb' : 'ml';
  const fbKey = ['top', 'bottom'].includes(position) ? 'my' : 'mx';

  return (props: MarginProps): string => {
    if (typeof props[key] === 'number') return `${props[key]}rem`;
    if (typeof props[key] === 'string') return props[key] as string;
    if (typeof props[fbKey] === 'number') return `${props[fbKey]}rem`;
    if (typeof props[fbKey] === 'string') return props[fbKey] as string;
    if (typeof props.m === 'number') return `${props.m}rem`;
    if (typeof props.m === 'string') return props.m as string;
    return '0rem';
  };
};

const margin = css<MarginProps>`
  margin: ${get('top')} ${get('right')} ${get('bottom')} ${get('left')};
`;

export default margin;
