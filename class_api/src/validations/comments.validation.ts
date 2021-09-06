import * as yup from 'yup';

export const schemaComment = yup.object().shape({
  id_class: yup.string().trim().min(1).required('O campo name é obrigatorio'),
	comment: yup.string().trim().min(1).required('O campo description é obrigatorio')
});
