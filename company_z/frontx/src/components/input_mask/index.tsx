import React, { useRef, useEffect } from 'react';
import {TextField} from '@material-ui/core';


import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { useField } from '@unform/core';
import { Alert } from '@material-ui/lab';

interface Props extends InputProps {

  name: string;

}

export default function InputMask({ name, ...rest }: Props) {
  const inputRef = useRef(null);

  const {
    fieldName, registerField, defaultValue, error,
  } = useField(name);

  useEffect(() => {
    registerField({

      name: fieldName,

      ref: inputRef.current,

      path: 'value',

      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },

      clearValue(ref: any) {
        ref.setInputValue('');
      },

    });
  }, [fieldName, registerField]);

  return (

		<div>
				<ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest}>
						{(inputProps) => (
						<TextField variant="outlined" {...inputProps} {...rest} />
						)}
				</ReactInputMask>
				{error && <Alert severity="warning">{error}</Alert>}
		</div>
  );
}
