import TableCustom from "../../components/table";
import {useState,useEffect,useMemo} from 'react';
import {useSelector,useDispatch,shallowEqual} from 'react-redux'
import { fetchProdStart } from "../../reducers/actions/prod/index";
import {selectProdutos} from '../../reducers/selectors/prod/index'

const ListPage = ()=>{

    const dispatch = useDispatch()
    const produtos = useSelector(selectProdutos,shallowEqual)

    const fecthProdutos = ()=>{
        dispatch(fetchProdStart());
    }

    useEffect(()=>{
        console.log('udpate')
        setRows(produtos)
    },[produtos])


    useEffect(()=>{
        console.log('xxx')
        fecthProdutos()
    },[])


    const [headers,setHeaders] = useState([
        'Nome',
        'Descrição',
        'Preço',
        'Quantidade'
    ])

    const [rows,setRows] = useState([])

    const [data_names,setDataNames] = useState([
        'nome',
        'descricao',
        'preco',
        'quantidade',
    ])

        return (
            
            <TableCustom
            rows={rows}
            headers={headers}
            data_names={data_names}
                />
            
        )
    

   
}

export default ListPage;