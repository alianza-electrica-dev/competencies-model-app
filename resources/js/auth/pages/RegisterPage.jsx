import { useAppQuery } from '../../hooks';
import { RegisterForm } from '../components';

export const RegisterPage = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'catalog',
    'auth.get_catalogs',
  );

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <RegisterForm
      areas={data.areas}
      branches={data.branches}
      companies={data.companies}
      managers={data.managers}
    />
  );
};
