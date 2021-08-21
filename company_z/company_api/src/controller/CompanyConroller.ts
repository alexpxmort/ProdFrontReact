import { getRepository, ILike } from	'typeorm';
import { Request, Response } from 'express';
import * as Yup from 'yup';
import { Company } from '../entity/Company';
import { schemaCompany } from '../validations/company.validation';
import Pagination from '../utils/pagination.utils';
import CompanyRepository from '../repositories/CompanyRepository'

const repo = new CompanyRepository(getRepository, Company);
export const getCompanies = async (req:Request, res:Response) => {
  const { query } = req;
  const { page, size } = query;
  const keyword = query.keyword || '';

  const paginator = new Pagination(page, size);

  const [result, total] = await repo.paginate(
    keyword, paginator.getLimit(), paginator.getOffSet(),
  )

  const data = paginator.getPaginationData(result, total);

  return res.json(data);
};

export const saveCompany = async (req:Request, res:Response) => {
  const { data } = req.body;
  const dataObj = (data !== undefined && Object.keys(data).length > 0) ? data : req.body;
  try {
    await schemaCompany.validate(dataObj, { abortEarly: false });
    try {
      const company = await repo.save(dataObj);
      return res.status(200).json({ error: false, company });
    } catch (err) {
      return res.status(200).json({ msg: `Erro ao criar company: ${err.message}`, error: true });
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
