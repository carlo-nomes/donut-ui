import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Box, { BoxProps } from '../layout/Box';
import Code from '../typography/Code';
import { H1 } from '../typography/Heading';
import ColorSlider from './ColorSlider';

const Color = styled(Box)<BoxProps>`
  background-color: ${({ color }) => color};

  border-style: solid;
  border-width: var(--border-width-large);
  border-color: var(--colors-gray-3);
  border-radius: var(--border-radius-default);
`;

export type ColorSelectorProps = {
  color: string;
};
const ColorSelector: FC<ColorSelectorProps> = ({ color: initialColor }) => {
  const [color, setColor] = useState(initialColor);

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

export type ColorPaletteProps = {};
const ColorPalette: FC<ColorPaletteProps> = () => {
  return (
    <>
      <H1>Primary</H1>
      <Box direction="row" justify="between">
        <ColorSelector color="hsl(175deg, 50%, 90%)" />
        <ColorSelector color="hsl(175deg, 50%, 75%)" />
        <ColorSelector color="hsl(175deg, 50%, 90%)" />
        <ColorSelector color="hsl(175deg, 50%, 30%)" />
        <ColorSelector color="hsl(175deg, 50%, 20%)" />
      </Box>
    </>
  );
};

export default ColorPalette;
