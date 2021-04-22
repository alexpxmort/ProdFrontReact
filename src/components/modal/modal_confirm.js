
    import { Dialog,DialogTitle,List,ListItemText,ListItem } from '@material-ui/core';
    
    const ModalConfirmDelete = ({open,handleFuncYes,onClose,msg,idDel})=>{
        return(
            <Dialog
                open={open}
                onClose={onClose}
                >
                    <DialogTitle>
                        {msg}
                    </DialogTitle>
                    <List style={{flexDirection:'row',alignItems:'center'}}>
                        <ListItem  button onClick={()=>{handleFuncYes(idDel);onClose()}} style={{backgroundColor:'#007bff',marginBottom:5,borderRadius:10,width:'50%',marginLeft:90}} divider={true}>
                            <ListItemText style={{textAlign:'center'}}>
                                Sim
                            </ListItemText>
                        </ListItem>
                        <ListItem button onClick={()=>onClose()} style={{backgroundColor:'#dc3545',borderRadius:10,width:'50%',marginLeft:90}}>
                            <ListItemText style={{textAlign:'center'}}>
                            Cancelar
                            </ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
        )
    }

    export default ModalConfirmDelete;