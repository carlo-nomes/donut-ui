import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Box, { BoxProps } from '../layout/Box';
import Code from '../typography/Code';
import ColorSlider from './ColorSlider';

const Color = styled(Box)<BoxProps>`
  background-color: ${({ color }) => color};

  border-style: solid;
  border-width: var(--border-width-large);
  border-color: var(--colors-gray-500);
  border-radius: var(--border-radius-default);
`;

export type ColorSelectorProps = {
  color?: string;
};
const ColorSelector = (props: ColorSelectorProps) => {
  const [color, setColor] = useState(props.color || '');

  return (
    <Box p={1} align="center">
      <Color
        width={17}
        height={17}
        mb={1}
        p={1}
        align="center"
        justify="center"
        color={color}
      >
        <Code>{color}</Code>
      </Color>
      <ColorSlider value={color} onChange={setColor} />
    </Box>
  );
};

export default ColorSelector;
