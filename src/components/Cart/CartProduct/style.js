import styled from 'styled-components';
import { Color } from '../../../styles/color';
import { Font } from '../../../styles/font';

export const ListCart = styled.ul`
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${Color.grey2};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Color.primary};
    border-radius: 8px;
  }

  li {
    display: flex;
    gap: 1rem;
    position: relative;
  }

  .productImg {
    width: 80px;
    background: ${Color.grey2};
    border-radius: 8px;
  }

  .productInfo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    gap: 8px;

    h3 {
      font: ${Font.title};
      color: ${Color.grey5};
      max-width: 15ch;
    }

    span {
      font: ${Font.text4};
      color: ${Color.grey4};
    }
  }

  button {
    position: absolute;
    right: 10px;
    top: 0;
    padding: 1rem 0;
    cursor: pointer;
    background: none;
    border: none;
    color: ${Color.grey4};
    font: ${Font.text3};
    transition: 0.3s ease;

    &:hover {
      scale: 1.1;
    }
  }
`;
