import styled from 'styled-components';
import sharedButtonStyles from './sharedButtonStyles';

const FilledButton = styled.button`
  ${sharedButtonStyles}

  color: var(--colors-text-light);
  background-color: ${({ color }) => color};
  border-color: ${({ color }) => color};

  &:disabled {
    background-color: var(--colors-button-disabled);
    border-color: var(--colors-button-disabled);
  }
`;

export default FilledButton;
