import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export function ObservationsGrid({observations}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className='card flex justify-content-center '>
        <Button
          className='h-3rem'
          label='Observaciones'
          icon='pi pi-eye'
          onClick={() => setVisible(true)}
          severity='warning'
        />
        <Dialog
          header='Mis Observaciones'
          visible={visible}
          style={{ width: '50vw', height: '30vw' }}
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
        >
          <DataTable value={observations}  emptyMessage='No hay observaciones' tableStyle={{ minWidth: '30rem' }}>
            <Column field='observations' header='Observaciones'></Column>
          </DataTable>
        </Dialog>
      </div>
    </>
  );
}
ObservationsGrid.propTypes = {
  observations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

