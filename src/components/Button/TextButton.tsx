import styled from 'styled-components';
import sharedButtonStyles from './sharedButtonStyles';

const TextButton = styled.button`
  ${sharedButtonStyles}

  color: ${({ color }) => color};
  background-color: transparent;
  border-color: transparent;
`;

export default TextButton;
