import styled from 'styled-components';
import { Color } from '../../../styles/color';
import { Font } from '../../../styles/font';

export const Form = styled.form`
  position: relative;
  width: 100%;
  max-width: 400px;

  input {
    border: 2px solid ${Color.grey2};
    border-radius: 8px;
    width: 100%;
    height: 50px;
    padding: 1rem;
    padding-right: 7rem;
    color: ${Color.grey4};
    outline-color: ${Color.primary};
  }

  input::placeholder {
    color: ${Color.grey3};
    font: ${Font.text3};
  }

  button {
    position: absolute;
    top: 8px;
    right: 10px;
  }
`;
