import {validator} from 'cpf-cnpj-validator';


const JOI   = require('@hapi/joi').extend(validator)

export const validateCnpj = (num)=>{
	const cnpjSchema = JOI.document().cnpj();
	return cnpjSchema.validate(num) && !cnpjSchema.validate(num).hasOwnProperty('error') ;
}
