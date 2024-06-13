import { useAppQuery } from '../../../hooks';
import { Loading } from '../../../common';
import { EmpoyeesEvaluationsTable } from './EmpoyeesEvaluationsTable';

export const EmployeesEvaluationsMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'EmployeesEvaluations',
    'admin.employees.user_test',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <EmpoyeesEvaluationsTable evaluations={data.tests} />;
};
