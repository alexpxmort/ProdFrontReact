import { getRepository,createConnection} from	'typeorm';
import { Request, Response } from 'express';
import * as Yup from 'yup';
import { Company } from '../entity/Company';
import { schemaCompany } from '../validations/company.validation';
import Pagination from '../utils/pagination.utils';
import CompanyRepository from '../repositories/CompanyRepository'
import { getData } from '../utils/body.utils';

createConnection();

const repo = new CompanyRepository(getRepository, Company);
export const getCompanies = async (req:Request, res:Response) => {
  const { query } = req;
  const { page, size } = query;
  const keyword = query.keyword || '';

	if(page && size && keyword){
		const paginator = new Pagination(page, size);

		try{
			const [result, total] = await repo.paginate(
				keyword, paginator.getLimit(), paginator.getOffSet(),
			)

			 let dataPaginated = paginator.getPaginationData(result, total);

			 return res.json(dataPaginated);
		}catch(err){
			return res.status(400).json({msg:`Companies erro ${err.message}`,error:true})
		}
	}

	let data = await repo.findAll();

	return res.json(data);

};

export const saveCompany = async (req:Request, res:Response) => {
 const dataObj = getData(req);
  try {
    await schemaCompany.validate(dataObj, { abortEarly: false });
    try {
      const company = await repo.save(dataObj);
      return res.status(200).json({ error: false, company });
    } catch (err) {
      return res.status(400).json({ msg: `Erro ao criar company: ${err.message}`, error: true });
    }
  } catch (err) {
    const errorMessages = {};

    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
    }

    return res.status(400).json({ msg: 'Dados Inválidos', error: true, erros: errorMessages });
  }
};

export const updateCompany = async (req:Request, res:Response) => {
  const {id} = req.params;
  let company = await repo.get(+id);

	if(!company){
		return res.status(404).json({msg:'Company Não Encontrada',error:true})
	}

  const dataObj = getData(req);
  try {
    await schemaCompany.validate(dataObj, { abortEarly: false });
    try {
      const company = await repo.update(+id,dataObj);

			if(company.affected === 1){
				let updatedCompany = await repo.get(+id);
				return res.status(200).json({ error: false,company:updatedCompany });
			}else{
				return res.status(400).json({ error: false, msg:'Company não atualizada' });
			}
      
    } catch (err) {
      return res.status(400).json({ msg: `Erro ao atualizar company: ${err.message}`, error: true });
    }
  } catch (err) {
    const errorMessages = {};

    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        errorMessages[error.path] = error.message;
      });
    }

    return res.status(400).json({ msg: 'Dados Inválidos', error: true, erros: errorMessages });
  }
};

export const findById = async (req:Request, res:Response) =>{

	const {id} = req.params;
	let company = await repo.get(+id);

	if(company){
		return res.status(200).json({company,error:false})
	}else{
		return res.status(404).json({msg:'Company Não Encontrada',error:true})
	}
}

export const deleteCompany = async (req:Request, res:Response) =>{

	const {id} = req.params;
	let company = await repo.get(+id);

	if(company){
		try{
			await repo.delete(+id);
			return res.status(200).json({msg:`Company Deletada !`,error:false});
		}catch(err){
			return res.status(400).json({msg:`Erro ao deletar Company ${err.message}`,error:true})
		}
	}else{
		return res.status(404).json({msg:'Company Não Encontrada',error:true})
	}
}

