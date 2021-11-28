import styled from 'styled-components';
import { H3 } from '@donut-ui/typography';

const Title = styled(H3)`
  grid-area: title;
  margin: 0;

  color: ${({ color }) => color};
`;

export default Title;
