import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { RiosUpdate, RiosDelete } from './';

export const RiosTable = ({ rios, formikContext }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <div className='card'>
      <Button
        label='Ver RIO'
        icon='pi pi-eye'
        text
        className='text-secondary hover:surface-200'
        onClick={() => setDialogVisible(true)}
        type='button'
      />
      <Dialog
        header='Documento RIO'
        visible={dialogVisible}
        style={{ width: '75vw' }}
        maximizable
        modal
        contentStyle={{ height: '300px' }}
        onHide={() => setDialogVisible(false)}
      >
        <DataTable
          value={rios}
          scrollable
          scrollHeight='flex'
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column field='responsability' header='Responsabilidad' />

          <Column field='indicator' header='Indicador' />

          <Column field='weighing' header='Ponderación' />

          <Column field='purpose' header='Objetivo' />

          <Column
            header=''
            style={{ width: '5vw' }}
            body={rowData => (
              <RiosUpdate rowData={rowData} formikUpdate={formikContext} />
            )}
          />
          <Column
            header=''
            style={{ width: '5vw' }}
            body={rowData => (
              <RiosDelete rowData={rowData} formikDelete={formikContext} />
            )}
          />
        </DataTable>
      </Dialog>
    </div>
  );
};

RiosTable.propTypes = {
  rios: PropTypes.arrayOf(PropTypes.object).isRequired,
  formikContext: PropTypes.object,
  formikUpdate: PropTypes.object,
  formikDelete: PropTypes.object,
};
