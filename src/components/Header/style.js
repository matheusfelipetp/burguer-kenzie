import styled from 'styled-components';
import { Color } from '../../styles/color';

export const HeaderStyled = styled.header`
  background: ${Color.grey1};
  padding: 1.5rem 0;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (min-width: 1200px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
