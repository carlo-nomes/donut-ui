import React from 'react';
import styled from 'styled-components';
import { Story } from '@storybook/react/types-6-0';

import useColorPresets, { ColorPreset } from './useColorPresets';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;

const Shade = styled.div<{ bg: string; fg: string }>`
  background-color: ${({ bg }) => bg};
  color: ${({ fg }) => fg};
  text-align: center;
  padding: 1rem;
`;

const story = { title: 'General/Colors' };
export default story;

const Template: Story<{ color: ColorPreset }> = (args) => {
  const { shades } = useColorPresets(args.color);

  return (
    <Wrapper>
      {Object.entries(shades).map(([key, color]) => (
        <Shade
          key={key}
          bg={color}
          fg={Number(key) <= 500 ? 'rgba(0,0,0,.8)' : 'rgba(255,255,255,.8)'}
        >
          {args.color} {key}
        </Shade>
      ))}
    </Wrapper>
  );
};

export const Gray = Template.bind({});
Gray.args = {
  color: 'gray',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
};
