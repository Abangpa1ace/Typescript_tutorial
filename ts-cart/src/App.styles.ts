import styled from 'styled-components';
import { IconButton } from '@material-ui/core'

export const Wrapper = styled.main`
  margin: 40px;
  background: #f4f4f4;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  top: 100px;
  right: 100px;
  z-index: 100;

`;