import React, { useState} from 'react';
import { TextField, FormGroup, Button } from '@material-ui/core';


import SearchIcon from '@material-ui/icons/Search';

interface SearchBarProps{
	onClick:any;
}

const SearchBar:React.FC<SearchBarProps> = ({onClick}) => {
  const [val, setValue] = useState('');

  return (
        <div style={{
          flexDirection: 'row', display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}
        >
            <FormGroup>
                <TextField value={val} onChange={(evt) => setValue(evt.target.value)} style={{width: 600}} variant="outlined" />
            </FormGroup>
            <Button style={{marginLeft: 10}} variant="filled" onClick={() => onClick(val)}><SearchIcon color="primary" fonSize="large" /></Button>
        </div>
  );
};
export default SearchBar;
