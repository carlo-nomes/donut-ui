import styled from 'styled-components';

import Actions from './Actions';
import Message from './Message';
import Title from './Title';

const Alert = styled.div<{ bg?: string; fg?: string }>`
  max-width: 100%;

  background-color: ${({ bg }) => bg};

  border-style: solid;
  border-color: ${({ fg }) => fg};
  border-width: var(--border-width-large);
  border-radius: var(--border-radius-default);

  display: grid;
  grid-template-areas:
    'title title'
    'message message'
    'actions actions';
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;

  padding: 1rem;
`;

export default Object.assign(Alert, { Title, Message, Actions });
