import { useAppQuery } from '../../hooks';
import { EvaluationGrid } from './';
import { Footer } from '../../common/ui/Footer';
import styles from '../styles/home.module.css';

export const HomeMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'evaluations',
    'client.evaluations.indexContent',
  );

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>Bienvenido Nombre del usuario</p>
        <button>Log-out</button>
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
