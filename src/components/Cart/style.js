import styled from 'styled-components';
import { Color } from '../../styles/color';
import { Font } from '../../styles/font';

export const CartStyled = styled.section`
  margin: 1rem 1.125rem 2rem 1.125rem;
  max-width: 100%;
  border-radius: 8px;
  background: ${Color.grey1};
  height: ${({ currentSale }) => (currentSale.length ? '400px' : '300px')};
  position: relative;
  transition: 0.3s;
  animation: show 1s forwards;

  h2 {
    background: ${Color.primary};
    color: ${Color.white};
    padding: 1rem;
    font: ${Font.title};
    border-radius: 8px 8px 0 0;
  }

  .cartInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-height: 230px;
    padding: 1rem;

    p {
      font: ${Font.text1};
      color: ${Color.grey5};
      margin-top: 80px;
    }

    span {
      font: ${Font.text4};
      color: ${Color.grey4};
    }
  }

  @media (min-width: 1200px) {
    margin: 2rem 0 2rem 0;
    height: ${({ currentSale }) => (currentSale.length ? '500px' : '300px')};

    .cartInfo {
      max-height: 330px;
    }
  }
`;
