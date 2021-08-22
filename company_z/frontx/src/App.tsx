import React from 'react';
import { GlobalStyle } from './global.styles';
import Router from './routes/routes';
import Header from './components/header';

function App() {
  return (
		<div>
				<GlobalStyle />
				<Header />
				<Router />
		</div>
  );
}

export default App;
