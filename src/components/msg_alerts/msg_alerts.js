
import Swal from 'sweetalert2'

export const Message =(msg,type)=> Swal.fire({
    icon:type,
    title:msg
});

export default Message;