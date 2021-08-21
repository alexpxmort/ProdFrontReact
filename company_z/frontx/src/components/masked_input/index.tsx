import React from 'react';
import InputMask from 'react-input-mask';
import MaterialInput from '@material-ui/core/Input';

const MaskedInput = (mask: string, value: string, onChange: any) => (
  <InputMask mask={mask} value={value} onChange={onChange} maskChar={null}>
    {/* {(inputProps) => <MaterialInput {...inputProps} type="text" disableUnderline />} */}
  </InputMask>
);

export default MaskedInput;
