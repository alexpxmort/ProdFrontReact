import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';


export const theme = {
  colors: {
    primary: '#D1B27D7D',
    secondary: '#004751',
  },
  backGroundColor: '#D1B27D7D',
  spacing: [0, 4, 8, 12],
};



ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
 </BrowserRouter>,
	document.getElementById('root'),
);


