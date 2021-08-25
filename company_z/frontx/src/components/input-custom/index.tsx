/**
 * Componente Customizado de Input
 *
 */

import React, {useRef, useEffect} from 'react';
import {TextField, FormGroup} from '@material-ui/core';
import {useField} from '@unform/core';
import {Alert} from '@material-ui/lab';

interface InputCustomProps {
    name:string;
    variant:string;
    label:string;
}

export const InputCustom:React.FC<InputCustomProps> = ({
  name, label, variant, ...otherProps
}) => {
  const inputRef = useRef(null);
  const {
    fieldName, registerField, error, defaultValue,
  } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
		<div>
			  <FormGroup style={{marginTop: 10, marginBottom: 10, width: 500}}>
            <TextField label={label} variant={variant} defaultValue={defaultValue} {...otherProps} inputRef={inputRef} />
     </FormGroup>
				{error && <Alert severity="warning">{error}</Alert>}
		</div>
  );
};
