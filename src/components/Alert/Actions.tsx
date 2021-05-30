import styled from 'styled-components';

const Actions = styled.div`
  grid-area: actions;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  > * {
    margin-right: 1rem;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Actions;
