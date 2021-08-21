import * as yup from 'yup';

export const schemaCompany = yup.object().shape({
  nome: yup.string().min(1).required('O nome é obrigatório'),
  cnpj: yup.string().min(1).required('O Cnpj é obrigatório'),
  demanda: yup.number(),
  faturamento: yup.string().min(1).required('O Faturamento é obrigatório'),
  sobre: yup.string(),
});
