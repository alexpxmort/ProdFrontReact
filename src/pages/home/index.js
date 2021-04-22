import FormCustom from "../../components/form/produto.form"
import {createRef} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import{addProdStart} from '../../reducers/actions/prod/index'

const initialData = {
    nome:'',
    descricao:'',
    preco:'',
    quantidade:0
};


const formRef = createRef();

const HomePage = ()=>{
    const prod = useSelector(state => state.prod);
    const dispatch = useDispatch()

    const handleSubmit = async (data)=>{
       await dispatch (addProdStart(data))
       console.log(prod)
     }

     
    return (
        <div>
           <FormCustom ref={formRef} initialData ={initialData} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default HomePage;