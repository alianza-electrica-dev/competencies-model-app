import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export const RiosTable = ({ rios }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  return (
    <div className='card'>
      <Button
        label='Ver RIO'
        icon='pi pi-eye'
        text
        className='text-secondary hover:surface-200'
        onClick={() => setDialogVisible(true)}
      />
      <Dialog
        header='Flex Scroll'
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
          <Column field='responsability' header='Responsabilidad'></Column>
          <Column field='indicator' header='Indicador'></Column>
          <Column field='weighing' header='Ponderación'></Column>
        </DataTable>
      </Dialog>
    </div>
  );
};

RiosTable.propTypes = {
  rios: PropTypes.arrayOf(PropTypes.object).isRequired,
};
