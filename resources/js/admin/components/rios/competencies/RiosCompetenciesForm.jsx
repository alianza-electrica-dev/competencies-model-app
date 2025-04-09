import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export const RiosCompetenciesForm = test => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='card flex justify-content-center'>
      <Button
        onClick={() => setVisible(true)}
        className='text-primary'
        icon='pi pi-list-check'
        rounded
        text
        tooltip='Revisar Evaluación'
        tooltipOptions={{ position: 'top' }}
        type='button'
      />
      <Dialog
        onHide={() => setVisible(false)}
        header={test.descripcion}
        maximizable
        style={{ width: '60vw' }}
        visible={visible}
      ></Dialog>
    </div>
  );
};
