import styled from 'styled-components';
import { Color } from './color';
import { Font } from './font';

export const Button = styled.button`
  background: ${Color.primary};
  color: ${Color.white};
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font: ${Font.text3};
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;
