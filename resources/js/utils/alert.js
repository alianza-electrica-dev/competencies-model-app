import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useAuthUserStore } from '../store/authUser';

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

export const showSuccessAlert = (title, text) => {
  MySwal.fire({
    icon: 'success',
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const showErrorAlert = (title, text) => {
  MySwal.fire({
    icon: 'error',
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const adminNavigationAlert = user => {
  const login = useAuthUserStore.getState().setAuthUser;
  MySwal.fire({
    icon: 'question',
    title: 'Bienvenido',
    text: '¿A qué sistema desea ingresar?',
    showDenyButton: true,
    confirmButtonText: 'Administrador',
    denyButtonText: `Evaluaciones`,
    customClass: {
      confirmButton: 'bg-blue-700 border-round',
      denyButton: 'bg-orange-500 border-round',
      icon: 'text-blue-900',
    },
  }).then(result => {
    if (result.isConfirmed) {
      login(user);
    } else if (result.isDenied) {
      const authUser = { ...user, hasPermission: true };
      login(authUser);
    }
  });
};
