import React from 'react';
import {TextField, FormGroup} from '@material-ui/core';

interface searchInputProps {
	onClick: any;
}

const searchInput: React.FC<searchInputProps> = ({onClick, ...rest}) => (
  <FormGroup style={{backgroundColor: '#ff0000'}}>
			<TextField variant="outlined" {...rest} />
  </FormGroup>
);
export default searchInput;

