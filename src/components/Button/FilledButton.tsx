import styled from 'styled-components';
import sharedButtonStyles, { DEFAULT_BUTTON_COLOR } from './sharedButtonStyles';

const FilledButton = styled.button`
  ${sharedButtonStyles}

  color: var(--colors-text-light);
  background-color: ${({ color }) => color || DEFAULT_BUTTON_COLOR};
  border-color: ${({ color }) => color || DEFAULT_BUTTON_COLOR};

  &:disabled {
    background-color: var(--colors-button-disabled);
    border-color: var(--colors-button-disabled);
  }
`;

export default FilledButton;
