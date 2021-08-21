import React from 'react';
import InputMask from 'react-input-mask';
import {TextField} from '@material-ui/core';

interface MaskedInputProps {
	mask: string;
	value: string;
	onChange: any;
}

const MaskedInput: React.FC<MaskedInputProps> = ({
  mask, value, onChange, ...rest
}) => (
  <InputMask mask={mask} value={value} onChange={onChange} maskChar={null}>
		{(inputProps) => (
			<TextField variant="outlined" {...inputProps} {...rest} />
		)}
  </InputMask>
);
export default MaskedInput;

