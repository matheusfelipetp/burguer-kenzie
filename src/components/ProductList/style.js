import styled from 'styled-components';
import { Color } from '../../styles/color';
import { Font } from '../../styles/font';

export const Title = styled.div`
  padding: 0 1.125rem;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: show 1s forwards;

  h1 {
    font: ${Font.title};
    color: ${Color.grey5};
  }

  span {
    color: ${Color.grey4};
  }

  button {
    max-width: max-content;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-top: 2rem;

    h1 {
      font-size: 1.625rem;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding: 2rem 1.125rem;
  width: 100%;
  animation: show 1s forwards;

  @media (min-width: 1200px) {
    flex-wrap: wrap;
    padding: 2rem 0;
    overflow-x: unset;
  }

  @keyframes show {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
