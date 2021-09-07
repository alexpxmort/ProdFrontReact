import * as yup from 'yup';

export const schemaClass = yup.object().shape({
  name: yup.string().trim().min(1).required('O campo name é obrigatorio'),
	description: yup.string().trim().min(1).required('O campo description é obrigatorio'),
	video: yup.string().trim().min(1).required('O campo video é obrigatorio'),
	data_init: yup.date().required('O campo data_init é obrigatorio'),
	data_end: yup.date().required('O campo data_end é obrigatorio')
});
