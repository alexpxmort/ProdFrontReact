    /**
 * Componente Customizado de Modal de Tabela
 * 
 */
    


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {memo} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {useState} from 'react'
import ModalConfirmDelete from '../modal/modal_confirm';
import {isObject,empty} from '../../utils/string.utils'
import './table.styles.css'


const TableCustom = ({rows,headers,data_names,handleEdit,handleDelete,handleAdd})=>{

    const [open,setOpen] = useState(false)
    const [idDel,setIdDel]  = useState(null);
    const [nome,setNome]  = useState(null);

    const onClose = ()=>{
        setOpen(false)
    }

    const showModalDelete = (id,nome)=>{
        setOpen(true)
        setIdDel(id);
        setNome(nome);
    }

    const ModalDialodDelete = ()=>{        
        if(idDel === null){
            return(
                <div/>
            )
        }
        return(
               <ModalConfirmDelete
                msg={`Deseja mesmo deletar este produto:  ${nome}?`}
                open={open}
                onClose={onClose}
                idDel={idDel}
                handleFuncYes={handleDelete}
                /> 
        )
    }
    return(
        <Paper>
            <div style={{textAlign:'end',marginTop:40,marginRight:100}}>
                <AddCircleIcon fontSize={'large'} onClick={()=>handleAdd()} />
            </div>

            <div>
                {
                    (open)?(
                        ModalDialodDelete()
                    ):null
                }
            </div>

           <Table>
           <TableHead>
                <TableRow>
                    {
                        headers.map((val,index)=>(
                            <TableCell key={index}>
                                {val}
                            </TableCell>
                        ))
                    }
                    <TableCell>
                        Ações
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.map((row,idx)=>(
                        <TableRow key={idx}>
                            {
                                data_names.map((val,idx)=>{
                                    return(
                                        <TableCell  key={idx}>
                                        {
                                            isObject(row[val])?(
                                                <span className='MuiBadge-root' style={{marginLeft:18}}>
                                                    <span className="MuiBadge-badge MuiBadge-anchorOriginTopRightRectangle" style={{backgroundColor:row[val]['cor'],color:'#FFF'}}>
                                                    {row[val]['nome']}
                                                    </span>
                                                </span> 
                                                
                                            ):(
                                                (empty(row[val]))?
                                                (
                                                    'Não possui !'
                                                ):row[val]
                                            )
                                        }
                                        </TableCell>
                                    )
                                })
                            }
                            <TableCell>
                                    <EditIcon onClick={()=>handleEdit(row.id)}/>
                            </TableCell>
                            <TableCell>
                                    <DeleteIcon  onClick={()=>showModalDelete(row.id,row.nome)}/>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
           </Table>
        </Paper>
    )
} 

export default memo(TableCustom);
