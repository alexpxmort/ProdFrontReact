    /**
 * Página de Editar Produto
 * 
 */
    

import FormCustom from "../../components/form/produto.form"
import {useDispatch} from 'react-redux'
import{editProdStart,getProdStart} from '../../reducers/actions/prod/index'
import {withRouter,useParams} from 'react-router-dom'
import Message from "../../components/msg_alerts/msg_alerts";
import{useState,useEffect} from 'react'
import {useSelector,shallowEqual} from 'react-redux'
import { selectProdById } from "../../reducers/selectors/prod";
import {empty} from '../../utils/string.utils'
import Spinner from "../../components/loading/loading.compont";



const EditProdPage = ({history})=>{

    let _initialData = {
        nome:'',
        descricao:'',
        preco:'',
        quantidade:0
    };
    
    const prod = useSelector(selectProdById,shallowEqual)
    const dispatch = useDispatch()
    const [initialData,setData] = useState(_initialData)
    const [loading,setLoading] = useState(true)

    const {id} = useParams()

    const id_form = 'prod_form_edit';
    
    const editProd =  (data)=>{
        dispatch (editProdStart(data))
    }

    const goListProd = ()=>{
        history.push('/');
    }

    const fecthProd = (id)=>{
        dispatch(getProdStart(id));
    }

    useEffect(()=>{
        fecthProd(id)
    },[])

    useEffect( ()=>{
        if(!empty(prod)){
            setFieldsInitial(prod)
        }
    },[prod])


    const setFieldsInitial = (prod)=>{
        if(!empty(prod)){

            let{nome,descricao,preco,quantidade} = prod;
              
            let _obj = {
                nome:nome,
                descricao:descricao,
                preco:preco,
                quantidade:quantidade
            }

            
            setData(_obj)

            setTimeout(()=>{
                setLoading(false)
            },1000)
        }
      
    }


    const handleSubmit =  (data)=>{

        if(isNaN(data.preco)){
            Message('Formato de Preço inválido!\n Digite novamente outro valor!','warning')

            return false
        }

         editProd({data:data,id:id})
         setTimeout(()=>{
            goListProd() 
         },1500)
     }
     

    if(!loading){
        return(
            <FormCustom id={id_form}  initialData ={initialData} handleSubmit={handleSubmit}/>
        )
    }else{
        return (
            <Spinner/>
        )
    }
}

export default withRouter(EditProdPage);