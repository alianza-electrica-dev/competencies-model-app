import { useAppQuery } from '../../hooks';
import { Error, Footer, Loading } from '../../common';
import { EvaluationGrid, Header, RiosGrid } from './';
import styles from '../styles/home.module.css';
import { ObservationsGrid } from './ObservationsGrid';

export const HomeMain = () => {
  const { isPending, isError, data, error } = useAppQuery(
    'evaluations',
    'client.evaluations.indexContent',
  );

  const id = data?.tests[0]?.pivot.user_id

  const {
    isPending: isPendingObs,
    data: dataObs,
    error: errorObs,
  } = useAppQuery('Observations', 'admin.rios.employee_rios', { id });

  const Observations = dataObs?.rios?.flatMap(rio =>
      rio.data_rios.map(dataRio => ({
        observations: dataRio.observations})),
    )

  if (isPending || isPendingObs) {
    return <Loading />;
  }

  if (isError) {
    return <Error errorMessage={error?.message + errorObs?.message} />;
  }

  console.log(dataObs);

  return (
    <div className={styles.container}>
      <div className={`shadow-5 ${styles.header}`}>
        <Header />
      </div>

      <div className={`overflow-hidden ${styles.grid}`}>
        <EvaluationGrid evaluations={data.tests} />

        <div className='flex justify-content-center m-6 gap-4'>
          <RiosGrid rios={data.rios} tests={data.tests} />
          <ObservationsGrid observations={Observations} />
        </div>
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
