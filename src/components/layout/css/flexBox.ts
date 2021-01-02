import { css } from 'styled-components';

type AlignOptions = 'start' | 'end' | 'center' | 'stretch';

type JustifyOptions =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly';

export type FlexBoxProps = {
  direction?: 'column' | 'row';
  align?: AlignOptions;
  justify?: JustifyOptions;
};

const getJustify = (justify?: JustifyOptions): string => {
  switch (justify) {
    default:
    case 'start':
      return 'flex-start';
    case 'end':
      return 'flex-end';
    case 'center':
      return 'center';
    case 'between':
      return 'space-between';
    case 'around':
      return 'space-around';
    case 'evenly':
      return 'space-evenly';
  }
};

const flexBox = css<FlexBoxProps>`
  display: flex;

  flex-direction: ${({ direction }) => direction || 'column'};
  align-items: ${({ align }) => align || 'start'};
  justify-content: ${({ justify }) => getJustify(justify)};
`;

export default flexBox;
