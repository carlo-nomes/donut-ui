import { Story } from '@storybook/react/types-6-0';
import React, { FC } from 'react';
import Box, { BoxProps } from '../layout/Box';
import Code from './Code';
import { H1, H2, H3, H4, H5 } from './Heading';
import Text from './Text';

const story = { title: 'Typography' };
export default story;

const CenterBox: FC<BoxProps> = (props) => (
  <Box width="500px" mx="auto" {...props} />
);

export const HeadingStory: Story = () => (
  <CenterBox>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
  </CenterBox>
);
HeadingStory.storyName = 'Heading';

export const TextStory: Story = () => (
  <CenterBox>
    <H2>Lorem Ipsum</H2>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque
      ipsum iusto porro, aliquam explicabo totam provident assumenda laborum,
      nostrum illum sed illo voluptate voluptates sapiente molestiae ut odit!
      Modi?
    </Text>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sed
      nesciunt doloribus quaerat consectetur quod excepturi sint unde. Sint
      exercitationem voluptates explicabo, error culpa reiciendis aut qui unde
      obcaecati suscipit?
    </Text>
    <Text>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, fugiat
      quo quibusdam placeat harum velit voluptas, commodi provident molestiae,
      in quos corporis non repellat labore cupiditate eum facilis laborum et?
    </Text>
  </CenterBox>
);
TextStory.storyName = 'Text';

export const CodeStory: Story = () => {
  const snippet = `
  function sum(a, b){
    return a + b;
  }
  `;

  return (
    <CenterBox>
      <Code>{snippet}</Code>
    </CenterBox>
  );
};
CodeStory.storyName = 'Code';