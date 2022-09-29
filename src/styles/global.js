import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  .container {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 1.125rem;
  }

  @media (min-width: 1200px) {
    .grid-container {
      display: grid;
      grid-template-columns: 650px auto;
      gap: 40px;
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 1.125rem;
    }

    @media (min-width: 1320px) {
      .container {
        padding: 0;
      }
      .grid-container {
        grid-template-columns: 880px auto;
        padding: 0;
      }
    }
  }
`;
