import { useAppQuery } from '../../../hooks';
import { Error, Loading } from '../../../common';
import { RiosForm } from './';
import styles from '../../styles/RiosMain.module.css';

export const RiosMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'managers_rio',
    'admin.managers.get.managers',
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
        <RiosForm managers={data.managers} />
      </div>
    </div>
  );
};
