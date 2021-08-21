import React, {useState} from 'react';
import MaskedInput from '../../components/masked_input';


const AddCompanyPage:React.FC = () => {
  const [val, setval] = useState('');
  return (
		<MaskedInput mask="99.999.999/9999-99" value={val} onChange={(evt) => setval(evt.target.value)} />

  );
};

export default AddCompanyPage;
