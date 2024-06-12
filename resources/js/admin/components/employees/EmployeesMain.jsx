import { useAppQuery } from '../../../hooks';
import { Loading } from '../../../common';
import { EmployeesTable } from './';

export const EmployeesMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'Employees',
    'admin.employees.index_content',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return <EmployeesTable employees={data.employees} />;
};
