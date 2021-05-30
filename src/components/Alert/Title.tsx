import React from 'react';
import styled from 'styled-components';
import { useColorContext } from '../colors/ColorContext';
import { H3 } from '../typography/Heading';

const TitleWrapper = styled(H3)`
  grid-area: title;
  margin: 0;
  color: ${({ color }) => color};
`;

interface Props {}
const Title = (props: Props) => {
  const { shades } = useColorContext();
  return <TitleWrapper color={shades?.[700] || 'default'} {...props} />;
};

export default Title;
