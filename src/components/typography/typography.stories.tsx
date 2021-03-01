import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CenterDecorator from '../../../.storybook/decorators/CenterDecorator';
import Code from './Code';
import { H1, H2, H3, H4, H5 } from './Heading';
import Pre from './Pre';
import Text from './Text';

const story = { title: 'General/Typography' };
export default story;

export const HeadingStory: Story = () => (
  <>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
  </>
);
HeadingStory.storyName = 'Heading';
HeadingStory.decorators = [CenterDecorator];

export const TextStory: Story = () => (
  <>
    <H2>Lorem Ipsum</H2>
    <Text>
      <b>Lorem ipsum</b> dolor sit amet consectetur adipisicing elit. Dolorem
      itaque ipsum iusto porro, aliquam explicabo totam provident assumenda
      laborum, nostrum illum sed illo voluptate voluptates sapiente molestiae ut
      odit! Modi?
    </Text>
    <Text>
      <i>Lorem ipsum</i> dolor sit amet consectetur adipisicing elit. Officiis
      sed nesciunt doloribus quaerat consectetur quod excepturi sint unde. Sint
      exercitationem voluptates explicabo, error culpa reiciendis aut qui unde
      obcaecati suscipit?
    </Text>
    <Text>
      <u>Lorem ipsum</u> dolor sit, amet consectetur adipisicing elit. Tenetur,
      fugiat quo quibusdam placeat harum velit voluptas, commodi provident
      molestiae, in quos corporis non repellat labore cupiditate eum facilis
      laborum et?
    </Text>
  </>
);
TextStory.storyName = 'Text';
TextStory.decorators = [CenterDecorator];

export const CodeStory: Story = () => {
  const snippet = `
const calculator = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
}
  `;

  return (
    <Pre>
      <Code>{snippet}</Code>
    </Pre>
  );
};
CodeStory.storyName = 'Code';
CodeStory.decorators = [CenterDecorator];
