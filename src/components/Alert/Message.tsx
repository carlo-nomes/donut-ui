import styled from 'styled-components';

const Message = styled.p`
  grid-area: message;

  color: ${({ color }) => color};
`;

export default Message;
