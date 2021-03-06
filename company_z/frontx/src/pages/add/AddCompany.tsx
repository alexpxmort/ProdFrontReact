import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import {withRouter } from 'react-router-dom';
import FormCustomCompany from '../../components/form/company.form';
import Message from '../../components/msg_alerts/msg_alerts.component';
import { api } from '../../requests/api/api';
import VALUES from '../../utils/faturamento.utils';
import { validateCnpj } from '../../utils/validator';
import { schemaCompany } from '../../validations/company.validation';


const initialData = {
  nome: '',
  cnpj: '',
  demanda: '',
  sobre: '',
};

const AddCompanyPage:React.FC = ({history}) => {
  const id = 'company_form';
  const formAddRef = useRef(null);

  const [options, setOptions] = useState(VALUES);
  const [errors, setErrors] = useState([]);
  const [disabled, setDisabled] = useState(false);


  const create = async (data) => {
    try {
      const resp = await api.post('companies', data);

      if (!resp.error) {
        Message('Company criada com Sucesso!', 'success');

        setDisabled(true);

        setTimeout(() => {
          history.push('/');
        }, 2000);
      }
    } catch (err) {
      Message(err.message, 'warning');
    }
  };

  const handleSubmit = async (data) => {
    data.demanda = data.demanda.replace(/[./,R$_]/g, '').trim();
    data.cnpj = 	data.cnpj.replace(/[./-]/g, '').trim();

    try {
      await schemaCompany.validate(data, { abortEarly: false });


      if (formAddRef) {
        formAddRef.current.setErrors({});
      }


      if (!validateCnpj(data.cnpj)) {
        Message('Cnpj Inválido!', 'warning');
        return false;
      }
      await create(data);
    } catch (err) {
      const errorMessages = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
      }

      if (formAddRef) {
        formAddRef.current.setErrors(errorMessages);
      }
    }

    return true;
  };

  return (
        <FormCustomCompany disabled={disabled} ref={formAddRef} id={id} options={options} initialData={initialData} handleSubmit={handleSubmit} />
  );
};
export default withRouter(AddCompanyPage);
