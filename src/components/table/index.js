import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {memo} from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


const TableCustom = ({rows,headers,data_names})=>{
    return(
        <Paper>
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
                                        {row[val]}
                                        </TableCell>
                                    )
                                })
                            }
                            <TableCell>
                                    <EditIcon/>
                            </TableCell>
                            <TableCell>
                                    <DeleteIcon/>
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