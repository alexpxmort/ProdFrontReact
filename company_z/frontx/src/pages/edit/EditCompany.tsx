import React, { useEffect, useRef, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import FormCustomCompany from '../../components/form/company.form';
import Spinner from '../../components/loading';
import Message from '../../components/msg_alerts/msg_alerts.component';
import { api } from '../../requests/api/api';
import VALUES from '../../utils/faturamento.utils';
import { validateCnpj } from '../../utils/validator';
import { schemaCompany } from '../../validations/company.validation';


let initialData = {
  nome: '',
  cnpj: '',
  demanda: '',
  sobre: '',
};

const EditCompanyPage:React.FC = ({history}) => {
  const id = 'company_form';
  const formEditRef = useRef(null);
  const params = useParams();

  const [options, setOptions] = useState(VALUES);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(async () => {
    const resp = await api.get(`companies/${params.id}`);
    initialData = resp.data.company;
    initialData.faturamento = {label: initialData.faturamento, value: initialData.faturamento};
    setLoading(false);
  }, []);

  if (loading) {
    return <Spinner />;
  }


  const update = async (data) => {
    try {
      const resp = await api.put(`companies/${params.id}`, data);

      if (!resp.error) {
        Message('Company atualizada com Sucesso!', 'success');

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


      if (formEditRef) {
        formEditRef.current.setErrors({});
      }


      if (!validateCnpj(data.cnpj)) {
        Message('Cnpj Inválido!', 'warning');
        return false;
      }
      await update(data);
    } catch (err) {
      const errorMessages = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
      }

      if (formEditRef) {
        formEditRef.current.setErrors(errorMessages);
      }
    }

    return true;
  };

  return (
        <FormCustomCompany disabled={disabled} ref={formEditRef} id={id} options={options} initialData={initialData} handleSubmit={handleSubmit} />
  );
};
export default withRouter(EditCompanyPage);
