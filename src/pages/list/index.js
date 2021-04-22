    /**
 * Página de Listagem de  Produtos
 * 
 */
    


import TableCustom from "../../components/table";
import {useState,useEffect} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux'
import { fetchProdStart } from "../../reducers/actions/prod/index";
import {selectProdutos} from '../../reducers/selectors/prod/index'
import {withRouter} from 'react-router-dom';
import { deleteProdStart } from "../../reducers/actions/prod/index";

const ListPage = ({history})=>{

    const dispatch = useDispatch()
    const produtos = useSelector(selectProdutos,shallowEqual)

    const fecthProdutos = ()=>{
        dispatch(fetchProdStart());
    }

    const deleteProd = (id)=>{
        dispatch(deleteProdStart(id));
    }

    const addProd = ()=>{
        history.push('add')
     }

    useEffect(()=>{
        setRows(produtos)
    },[produtos])


    useEffect(()=>{
        fecthProdutos()
    },[])


    const [headers,setHeaders] = useState([
        'Nome',
        'Descrição',
        'Preço',
        'Quantidade',
        'Situação'
    ])

    const editProd = (id)=>{
        history.push(`edit/${id}`)
    }

    const [rows,setRows] = useState([])

    const [data_names,setDataNames] = useState([
        'nome',
        'descricao',
        'preco',
        'quantidade',
        'situacao'
    ])

        return (
            
            <TableCustom
            rows={rows}
            headers={headers}
            data_names={data_names}
            handleDelete={deleteProd}
            handleEdit={editProd}
            handleAdd={addProd}
                />
            
        )
    

   
}

export default withRouter(ListPage);