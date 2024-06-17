import { useAppQuery } from '../../../hooks';
import { Loading } from '../../../common';
import { EmployeesTable } from './EmployeesTable';

export const EmployeesMain = () => {
  const employeesQuery = useAppQuery(
    'Employees',
    'admin.employees.index_content',
  );

  const TestCompetenciesQuery = useAppQuery(
    'Employees',
    'admin.employees.index_content',
  );

  if (employeesQuery.isPending || TestCompetenciesQuery.isPending) {
    return <Loading />;
  }

  if (employeesQuery.isError || TestCompetenciesQuery.isError) {
    return <span>Error</span>;
  }

  return <EmployeesTable employees={employeesQuery.data.employees}  />;
};
