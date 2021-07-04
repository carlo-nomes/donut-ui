import styled from 'styled-components';
import { H3 } from '../typography/Heading';

const Title = styled(H3)`
  grid-area: title;
  margin: 0;

  color: ${({ color }) => color};
`;

export default Title;
