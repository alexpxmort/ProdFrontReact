
import React from 'react';
import {withRouter} from 'react-router-dom';
import {
  HeaderContainer, OptionsContainer, OptionLink, LogoContainer, Logo,
} from './header.styles';

import uri from '../../images/logo.png';

const Header:React.FC = ({history}) => (
	<HeaderContainer>
		<LogoContainer onClick={() => history.push('/')}>
			<Logo alt="img" src={uri} />
  </LogoContainer>
		<OptionsContainer>
			<OptionLink to="/">
							User Test
   </OptionLink>
  </OptionsContainer>
	</HeaderContainer>
);


export default withRouter(Header);
