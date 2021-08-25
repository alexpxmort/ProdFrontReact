import * as yup from 'yup';

export const schemaCompany = yup.object().shape({
  nome: yup.string().min(1).required('O nome é obrigatório'),
  cnpj: yup.string().trim().length(14, 'O cnpj deve ter 14 caracteres').required('O Cnpj é obrigatório'),
  demanda: yup.number().min(100000000, 'A demanda deve ser maior ou igual a 100000000').required('A demanda é obrigatória'),
  faturamento: yup.string().trim()
    .test('len', 'O faturamento deve ter pelo menos 17 caracteres', (val) => val && val.toString().length >= 17).required('O Faturamento é obrigatório'),
  sobre: yup.string().trim(),
});
