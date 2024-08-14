import { useAppQuery } from '../../hooks';
import { RegisterForm } from '../components';
import { Error, Loading } from '../../common';

export const RegisterPage = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'catalog',
    'auth.get_catalogs',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={error.message} />;
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
