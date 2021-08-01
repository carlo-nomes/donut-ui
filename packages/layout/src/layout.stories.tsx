import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';

const story = { title: 'General/Box' };
export default story;

const borderStyle = css`
  border: 0.05rem dashed gray;
`;

const Wrapper = styled.div`
  ${borderStyle}
  display: inline-block;
  background-color: orange;

  > * {
    background-color: lightgreen;
    ${borderStyle}
  }
`;

const Content = styled.div`
  ${borderStyle}

  box-sizing: border-box;
  width: 100%;
  height: 100%;

  background-color: lightblue;
`;

export const BoxStory: Story = (props) => (
  <Wrapper>
    <Box {...props}>
      <Content />
    </Box>
  </Wrapper>
);
BoxStory.storyName = 'Box';
BoxStory.args = {
  m: 2,
  p: 2,
  size: 8,
};
