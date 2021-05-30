import React from 'react';
import styled from 'styled-components';
import { useColorContext } from '../colors';

const MessageWrapper = styled.p`
  grid-area: message;
  color: ${({ color }) => color};
`;
interface AlertMessageProps {}
const Message = (props: AlertMessageProps) => {
  const { shades } = useColorContext();

  return <MessageWrapper color={shades?.[700] || 'default'} {...props} />;
};

export default Message;
