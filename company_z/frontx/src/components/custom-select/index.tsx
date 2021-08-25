import React, { useRef, useEffect } from 'react';

import ReactSelect, {

  OptionTypeBase,

  Props as SelectProps,

} from 'react-select';

import { useField } from '@unform/core';
import './index.scss';
import { Alert } from '@material-ui/lab';

interface Props extends SelectProps<OptionTypeBase> {

  name: string;

}

export default function Select({ name, ...rest }: Props) {
  const selectRef = useRef(null);

  const {
    fieldName, defaultValue, registerField, error,
  } = useField(name);

  useEffect(() => {
    if (document.querySelector('.css-yk16xz-control')) {
      document.querySelector('.css-yk16xz-control').style.backgroundColor = '#D1B27D7D';
    }
    registerField({

      name: fieldName,

      ref: selectRef.current,

      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }

          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }

        if (!ref.state.value) {
          return '';
        }

        return ref.state.value.value;
      },

    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
		<div>
				<ReactSelect
				defaultValue={defaultValue}
				ref={selectRef}
				classNamePrefix="CUSTOM_CLASS"
				{...rest}
				/>

			{error && <Alert severity="warning">{error}</Alert>}
		</div>
  );
}
