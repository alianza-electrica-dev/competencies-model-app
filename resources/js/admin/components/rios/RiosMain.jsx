import { useAppQuery } from '../../../hooks';
import { Error, Loading } from '../../../common';
import { RiosForm, RiosInfo } from './';
import styles from '../../styles/RiosMain.module.css';

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
    <div className={styles.container}>
      <div className={styles.card}>
        <RiosForm employees={data.employees} periods={data.periods} />
      </div>
      <div className={styles.card}>
        <RiosInfo />
      </div>
    </div>
  );
};
