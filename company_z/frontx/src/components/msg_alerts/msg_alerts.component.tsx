
import Swal from 'sweetalert2';

const Message:React.FC = (msg, type) => Swal.fire({
  type,
  title: msg,
});

export default Message;
