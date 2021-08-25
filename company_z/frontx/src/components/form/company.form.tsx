/**
 * Componente Customizado de Formulario
 *
 */


import React, {FormHTMLAttributes, forwardRef} from 'react';
import {Button} from '@material-ui/core';
import {Form} from '@unform/web';
import { InputCustom } from '../input-custom';
import InputMask from '../input_mask';
import Select from '../custom-select/index';

 interface FormCustomCompanyProps extends FormHTMLAttributes<HTMLFormElement> {
	id:string;
	initialData:any;
	handleSubmit:any;
	options:any;
	ref:any;
	disabled:any;
 }

const FormCustomCompany:React.RefForwardingComponent<FormCustomCompanyProps> = ({
  id, options, initialData, handleSubmit, disabled,
}, ref) => (
				 <div style={{marginTop: 80, marginLeft: 20}}>
						 <Form ref={ref} id={id} initialData={initialData} onSubmit={handleSubmit}>
								 <InputCustom required name="nome" label="Nome" variant="outlined" type="text" />
								 <InputMask mask="99.999.999/9999-99" name="cnpj" />
								 {
                    (options.length > 0) ? (
                        <Select required isSearchable name="faturamento" placeholder="Selecione um Faturamento" options={options} />
                    ) : null
                }
      					<InputMask mask="R$ 99.999.99,99" name="demanda" />
								 <InputCustom label="Sobre" name="sobre" variant="outlined" type="text" />
								 <Button disabled={disabled} type="submit" variant="contained" color="primary">
										 Salvar
								 </Button>
						 </Form>
				 </div>
		 );

export default forwardRef(FormCustomCompany);
