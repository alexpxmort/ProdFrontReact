import { Request } from "express"

export const getData = (req:Request)=>{
	const { data } = req.body;
  const dataObj = (data !== undefined && Object.keys(data).length > 0) ? data : req.body;

	return dataObj;
}