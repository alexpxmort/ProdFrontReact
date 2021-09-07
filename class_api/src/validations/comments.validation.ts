import * as yup from 'yup';

export const schemaComment = yup.object().shape({
  classe: yup.string().trim().min(1).required('O campo classe é obrigatorio'),
	comment: yup.string().trim().min(1).required('O campo description é obrigatorio')
});
