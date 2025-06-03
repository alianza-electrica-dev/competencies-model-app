import { useAppQuery } from '../../../hooks';
import { Error, Loading } from '../../../common';
import { RiosForm } from './';


export const RiosMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'managers_rio',
    'admin.rios.rios_employees',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  return (
    <RiosForm employees={data.employees} periods={data.periods} />
  );
};
