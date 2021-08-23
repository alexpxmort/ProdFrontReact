import * as yup from 'yup';

export const schemaCompany = yup.object().shape({
  nome: yup.string().min(1).required('O nome é obrigatório'),
  cnpj: yup.string().min(14,'O cnpj deve ter 14 caracteres').required('O Cnpj é obrigatório'),
  demanda: yup.number().min(100000000,'A demanda deve ser maior ou igual a 100000000').required('A demanda é obrigatória'),
  faturamento: yup.string().min(17,'O faturamento deve ter pelo menos 17 caracteres').required('O Faturamento é obrigatório'),
  sobre: yup.string(),
});
