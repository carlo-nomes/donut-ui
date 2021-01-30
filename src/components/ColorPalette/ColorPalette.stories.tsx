import React from 'react';
import ColorPaletteComponent, { ColorPaletteProps } from './ColorPalette';
import { Story } from '@storybook/react/types-6-0';

const story = {
  title: 'General/Color Palette',
  component: ColorPaletteComponent,
};
export default story;

const Template: Story<ColorPaletteProps> = (args) => (
  <ColorPaletteComponent {...args} />
);

export const ColorPalette = Template.bind({});
