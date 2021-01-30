import styled from 'styled-components';

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-default);

  &:focus-within label {
    color: var(--colors-primary);
  }
`;

export default FormGroup;
