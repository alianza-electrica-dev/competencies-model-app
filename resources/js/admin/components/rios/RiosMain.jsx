import { useAppQuery } from '../../../hooks';
import { Error, Loading } from '../../../common';
import { RiosForm, RiosInfo } from './';
import { useState } from 'react';
import styles from '../../styles/RiosMain.module.css';

export const RiosMain = () => {
  const [rios, setRios] = useState([]);
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
        <RiosForm
          employees={data.employees}
          periods={data.periods}
          setRios={setRios}
        />
      </div>
      <div className={styles.card}>
        <RiosInfo rios={rios} />
      </div>
    </div>
  );
};
