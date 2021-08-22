
import {
  HeaderContainer, OptionsContainer, OptionLink, LogoContainer, Logo,
} from './header.styles';


// import searchInput from '../search_input';
import uri from '../../images/logo.png';

const Header:React.FC = () => (
	<HeaderContainer>
		<LogoContainer>
			<Logo alt="img" src={uri} />
  </LogoContainer>
		{/* <searchInput onClick={() => { alert('ok'); }} /> */}
		<OptionsContainer>
					<OptionLink to="/">
							Teste
     </OptionLink>
  </OptionsContainer>
	</HeaderContainer>
);


export default Header;
