import { Button } from 'primereact/button';
import { useAuthUserStore } from '../../store/authUser';

export const TestAuthSesion = () => {
  const fakeUser = {
    id: 1,
    name: 'Oscar',
    last_name: 'Lopez',
    second_last_name: 'Rodriguez',
    email: 'oscar.lopez@alianzaelectrica.com',
    email_verified_at: null,
    active: 1,
    created_at: null,
    updated_at: null,
    role_id: 1,
    area_id: 14,
    full_name: 'Oscar Lopez Rodriguez',
    score: 0,
    average: null,
    tests: [],
  };

  const onFakeUserButton = () => {
    const login = useAuthUserStore.getState().setAuthUser;
    login(fakeUser);
  };

  return <Button label='test' onClick={onFakeUserButton} />;
};
