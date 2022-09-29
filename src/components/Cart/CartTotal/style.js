import styled from 'styled-components';
import { Color } from '../../../styles/color';
import { Font } from '../../../styles/font';

export const CartStyled = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 2px solid ${Color.grey2};
  padding: 1rem;

  .totalInfo {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    p {
      margin-top: 0;
    }

    span {
      font: ${Font.text2};
    }
  }

  button {
    width: 100%;
    height: 50px;
    font: ${Font.text1};
  }
`;
