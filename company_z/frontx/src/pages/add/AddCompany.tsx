import React from 'react';
import { Form } from '@unform/web';
// import MaskedInput from '../../components/masked_input';
import InputMask from '../../components/input_mask';

const submit = (data) => {
  console.log(data);
};

const AddCompanyPage:React.FC = () => (
    <Form
					initialData={{ cnpj: '11111111111111', demanda: '200000' }}
					onSubmit={submit}
    >
      <InputMask mask="99.999.999/9999-99" name="cnpj" />
      <InputMask mask="R$ 99.999.99,99" name="demanda" />
      <button type="submit">send</button>
    </Form>
);
export default AddCompanyPage;
