import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {CardContainer, CompanyImage} from './card.styles';
import uri from '../../images/logo_2.png';

interface CardProps{
	edit:any;
	view:any;
	deleteProp:any;
	company:any;
	key:number;
}
const Card:React.FC<CardProps> = ({
  company, view, key, edit, deleteProp,
}) => (
	<CardContainer>
		<CompanyImage src={uri} alt="company_logo" />
		<div style={{flexDirection: 'row', display: 'flex'}}>
			<VisibilityIcon onClick={() => view()} />
			<EditIcon onClick={() => edit()} />
			<DeleteIcon onClick={() => deleteProp()} />
		</div>
		<h2>{company.nome}</h2>
		<p>{company.sobre}</p>
	</CardContainer>
);

export default Card;
