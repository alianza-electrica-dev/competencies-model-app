/* eslint-disable no-undef */
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useAuthUserStore } from '../../store/authUser';
import { Button } from 'primereact/button';

export const LogOutBtn = () => {
  const logout = useAuthUserStore(state => state.logout);
  
  const { mutate, isPending } = useMutation({
    mutationFn: () => axios.post(route('auth.logout')),
    onSuccess: () => logout(),
  });

  return (
    <Button
      onClick={() => mutate()}
      icon='pi pi-sign-out'
      loading={isPending}
      rounded
      size='large'
      style={{ color: '#000' }}
      text
      tooltip='Cerrar sesión'
      tooltipOptions={{ position: 'bottom' }}
    />
  );
};
