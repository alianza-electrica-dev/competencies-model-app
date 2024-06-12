import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const showRegisterAlert = () => {
  MySwal.fire({
    icon: 'success',
    title: 'Usuario Registrado',
    text: '!El usuario se ha registrado correctamente!',
    showConfirmButton: false,
    timer: 1500,
  });
};
