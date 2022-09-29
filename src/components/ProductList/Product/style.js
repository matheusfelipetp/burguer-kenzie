import styled from 'styled-components';
import { Color } from '../../../styles/color';
import { Font } from '../../../styles/font';

export const Card = styled.li`
  border: 2px solid ${Color.grey2};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 90%;
  max-width: 300px;
  animation: show 1s forwards;

  img {
    transition: 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  @media (min-width: 1200px) {
    width: 270px;
  }

  .cardImg {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${Color.grey1};
    width: 100%;
    height: 150px;
    position: relative;

    img {
      height: 150px;
      object-fit: cover;
    }
  }

  .cardInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.25rem;

    h2 {
      font: ${Font.title};
      color: ${Color.grey5};
    }

    span {
      font: ${Font.text4};
      color: ${Color.grey4};
    }

    p {
      font: ${Font.text2};
      color: ${Color.primary};
    }
  }

  button {
    max-width: max-content;
  }
`;
