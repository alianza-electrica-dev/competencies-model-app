import { Outlet } from 'react-router-dom';
import { Sidebar } from '../admin/components/ui';
import styles from '../admin/styles/private-layout.module.css';

export const PrivateLayout = () => {
  return (
    <div className={styles['pl-layout']}>
      <div className={styles['pl-sidebar']}>
        <Sidebar />
      </div>

      <div className={styles['pl-content']}>
        <div className={styles['pl-header']}>
          <p>header</p>
        </div>

        <div className={`card ${styles['pl-outlet']}`}>
          <Outlet />
        </div>

        <div className={styles['pl-footer']}>
          <p>footer</p>
        </div>
      </div>
    </div>
  );
};
