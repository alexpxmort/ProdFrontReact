import axios from 'axios'

 const request = {
    "URL_DEV":'http://localhost:4500/'
}


let api = axios.create({
  baseURL: request.URL_DEV, 
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    }
  ,
  validateStatus: (status) => status < 500
});


export const createMethod = async (data,path)=>{
   const resp = await api.post(`${path}/create`,{
   data
   })
  return resp.data;

}

export const updateMethod = async (data,path,id)=>{
  const resp = await api.put(`${path}/${id}`,
  data
 );

 return resp.data;
}

  export const getAllMethod = async (path)=>{
    const resp = await api.get(`${path}/all`);

   return await resp.data;
    
  };


  export const getByIdMethod = async (path,id)=>{
    const resp = await api.get(`${path}/find/${id}`);

    return await resp.data;
  };

  export const deleteMethod = async (path,id)=>{

    const resp = await api.delete(`${path}/delete/${id}`);

    return resp.data;

  };