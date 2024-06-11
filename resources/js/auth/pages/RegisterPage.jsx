import { useAppQuery } from '../../hooks';
import { RegisterForm } from '../components';

export const RegisterPage = () => {
  const { isPending, isError, data, error } = useAppQuery('areas', 'auth.get_areas');

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <RegisterForm areas={data.areas} />;
};
