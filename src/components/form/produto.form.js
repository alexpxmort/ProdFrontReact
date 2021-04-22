
import {Button} from '@material-ui/core';
import { InputCustom } from '../input-custom';
import {Form} from '@unform/web'
const FormCustom = ({id,initialData,handleSubmit})=>{
    return(
        <div style={{marginTop:80,marginLeft:20}}>
            <Form id={id}  initialData={initialData} onSubmit={handleSubmit}>
                <InputCustom required name={'nome'} label="Nome" variant="outlined"  type={'text'}/>
                <InputCustom  label="Descrição"  name={'descricao'} variant="outlined"   type={'text'} />
                <InputCustom required label="Preço"  name={'preco'}  variant="outlined"  type={'text'}  />
                <InputCustom required  label="Quantidade"  name={'quantidade'} variant="outlined" type={'number'} />
                <Button  type={'submit'} variant="contained" color="primary">
                    Salvar
                </Button>
            </Form>
        </div>
    )
}

export default FormCustom;