import styled from 'styled-components';

import sharedButtonStyles, { DEFAULT_BUTTON_COLOR } from './sharedButtonStyles';

const OutlinedButton = styled.button`
  ${sharedButtonStyles}

  color: ${({ color }) => color || DEFAULT_BUTTON_COLOR};
  background-color: transparent;
  border-color: ${({ color }) => color || DEFAULT_BUTTON_COLOR};

  &:disabled {
    color: var(--colors-button-disabled);
    border-color: var(--colors-button-disabled);
  }
`;

export default OutlinedButton;
