import { HomeMain } from '../components';
import styles from '../styles/page.module.css';

export const HomePage = () => {
  return (
    <div className={`${styles['app-container']}`}>
      <HomeMain />
    </div>
  );
};
