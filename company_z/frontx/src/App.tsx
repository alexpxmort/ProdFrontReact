import React, { useState } from 'react';

import InputMask from 'react-input-mask';
import MaskedInput from './components/masked_input';

function App() {
  const [val, setval] = useState('');
  return (
    <div className="App">
      <MaskedInput mask="99.999.999/9999-99" value={val} onChange={(evt) => setval(evt.target.value)} />
    </div>
  );
}

export default App;
