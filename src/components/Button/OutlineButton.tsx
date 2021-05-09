import styled from 'styled-components';
import sharedButtonStyles from './sharedButtonStyles';

const OutlinedButton = styled.button`
  ${sharedButtonStyles}

  color: ${({ color }) => color};
  background-color: transparent;
  border-color: ${({ color }) => color};

  &:disabled {
    color: var(--colors-button-disabled);
    border-color: var(--colors-button-disabled);
  }
`;

export default OutlinedButton;
