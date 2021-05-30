import React from 'react';
import styled from 'styled-components';

import { ColorContext } from '../colors';
import useColorPresets, { ColorPreset } from '../colors/useColorPresets';

import Actions from './Actions';
import Message from './Message';
import Title from './Title';

const AlertWrapper = styled.div<{ bg?: string; fg?: string }>`
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

export type AlertProps = { color?: ColorPreset };
const Alert = (props: AlertProps) => {
  const { color, shades } = useColorPresets(props.color || 'gray');

  return (
    <ColorContext value={{ color, shades }}>
      <AlertWrapper
        bg={shades?.[100] || ''}
        fg={shades?.[500] || ''}
        {...props}
      />
    </ColorContext>
  );
};

Alert.Title = Title;
Alert.Message = Message;
Alert.Actions = Actions;

export default Alert;
