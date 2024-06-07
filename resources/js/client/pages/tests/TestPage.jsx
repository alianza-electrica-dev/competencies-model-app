import { Loading } from '../../../components/ui';
import { useAppQuery } from '../../../hooks/useAppQuery';
import { TestGrid } from '../../components/tests/TestGrid';

export const TestPage = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'employee-test',
    'employe.test',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { tests, user } = data;

  return (
    <div>
      <h1>
        Bienvenido: <span>{user.full_name}</span>
      </h1>
      <hr />

      <TestGrid tests={tests} />
    </div>
  );
};
