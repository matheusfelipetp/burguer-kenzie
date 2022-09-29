import styled from 'styled-components';
import { Color } from '../../styles/color';

export const LoadingStyled = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 6px solid ${Color.grey2};
  border-top-color: ${Color.primary};
  animation: is-rotating 1s infinite;
  justify-self: center;
  margin-left: 45vw;
  margin-top: 150px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  @media (min-width: 1200px) {
    margin-top: 200px;
    margin-left: 0;
  }
`;
