import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../common';
import styles from './private-layout.module.css';

export const PrivateLayout = () => {
  return (
    <div className={styles['pl-layout']}>
      <div className={styles['pl-content']}>
        <div className={styles['pl-header']}>
          <Header />
        </div>

        <div className={`${styles['pl-outlet']}`}>
          <div style={{ height: '100%' }}>
            <Outlet />
          </div>
        </div>

        <div className={styles['pl-footer']}>
          <Footer />
        </div>
      </div>
    </div>
  );
};
