import styled from 'styled-components';

import sharedButtonStyles, { DEFAULT_BUTTON_COLOR } from './sharedButtonStyles';

const TextButton = styled.button`
  ${sharedButtonStyles}

  color: ${({ color }) => color || DEFAULT_BUTTON_COLOR};
  background-color: transparent;
  border-color: transparent;

  &:disabled {
    color: var(--colors-button-disabled);
  }
`;

export default TextButton;
