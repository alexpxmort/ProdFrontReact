import FormCustom from "../../components/form/produto.form"
import {useDispatch} from 'react-redux'
import{addProdStart} from '../../reducers/actions/prod/index'

const initialData = {
    nome:'',
    descricao:'',
    preco:'',
    quantidade:0
};


const HomePage = ()=>{
    const dispatch = useDispatch()

    const id = 'prod_form';
    
    const addProd =  (data)=>{
        dispatch (addProdStart(data))
    }

  
    const handleSubmit =  (data)=>{
         addProd(data)
     }
     
    return (
           <FormCustom id={id}  initialData ={initialData} handleSubmit={handleSubmit}/>
    )
}

export default HomePage;