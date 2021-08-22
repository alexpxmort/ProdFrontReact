import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  a{
    text-decoration: none;
    color: black;
  }

  body{
    font-family:'Open Sans Condensed';
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
		background-color:#D1B27D7D;
  }

  *{
      box-sizing:border-box;
			padding:0;
			margin:0;
  }
`;
