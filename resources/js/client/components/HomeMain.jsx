import { useAppQuery } from '../../hooks';
import { Error, Footer, Loading } from '../../common';
import { EvaluationGrid, Header } from './';
import styles from '../styles/home.module.css';

export const HomeMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'evaluations',
    'client.evaluations.indexContent',
  );

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={error.message} />;
  }

  return (
    <div className={styles.container}>
      <div className={`shadow-5 ${styles.header}`}>
        <Header />
      </div>

      <div className={`overflow-hidden ${styles.grid}`}>
        <EvaluationGrid evaluations={data.tests} />
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
