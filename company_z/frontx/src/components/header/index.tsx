
import React from 'react';
import {
  HeaderContainer, OptionsContainer, OptionLink, LogoContainer, Logo,
} from './header.styles';


import uri from '../../images/logo.png';

const Header:React.FC = () => (
	<HeaderContainer>
		<LogoContainer>
			<Logo alt="img" src={uri} />
  </LogoContainer>
		<OptionsContainer>
			<OptionLink to="/">
							User Test
   </OptionLink>
  </OptionsContainer>
	</HeaderContainer>
);


export default Header;
