/* eslint-disable react/prop-types */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';

export const RiosTable = ({ rios, forkRep, forkRem }) => {
  const [dialogVisible, setDialogVisible] = useState(false);

  const onRowEditComplete = e => {
  const {/*  originalEvent, data */ index, newData } = e;
  forkRep(index, newData)
  console.log(index, newData)
  }
  const actionBodyTemplate = ind => {
    return (
      <>
        <Button
          icon='pi pi-trash'
          rounded
          outlined
          severity='danger'
          onClick={() => forkRem(ind)}
        />
      </>
    );
  };
  const respoEditor = (data) => {
    return (
      <>
        <InputTextarea
          value={data.value}
          onChange={e => data.editorCallback(e.target.value)}
          rows={2}
          cols={40}
          autoResize
          invalid={false}
        />
      </>
    )
  } 
  const indiEditor = (data) => {
    return (
      <>
        <InputTextarea
          value={data.value}
          onChange={e => data.editorCallback(e.target.value)}
          rows={2}
          cols={40}
          autoResize
          invalid={false}
        />
      </>
    )
  }
  const weigEditor = (data) => {
    
  return (
    <>
      <InputNumber
        inputId='minmax-buttons'
        value={data.value}
        onValueChange={e => data.editorCallback(e.value)}
        mode='decimal'
        showButtons
        invalid={false}
        inputStyle={{ width: '55px' }}
        min={0}
        max={100}
      />
    </>
  );
  } 
  const objEditor = data => {
    return (
      <>
        <InputNumber
          inputId='minmax-buttons'
          value={data.value}
          onValueChange={e => data.editorCallback(e.value)}
          mode='decimal'
          showButtons
          invalid={false}
          inputStyle={{ width: '55px' }}
          min={0}
          max={100}
        />
      </>
    );
  };
  return (
    <div className='card'>
      <Button
        label='Ver o Modificar Rio'
        icon='pi pi-eye'
        text
        className='text-white hover:surface-500 bg-blue-900'
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
          value={rios.values.rios}
          scrollable
          scrollHeight='flex'
          tableStyle={{ minWidth: '50rem' }}
          editMode='row'
          onRowEditComplete={onRowEditComplete}
          emptyMessage='No existe ningun registro'
        >
          <Column field='responsability' header='Responsabilidad' editor={respoEditor}/>
          <Column field='indicator' header='Indicador' editor={indiEditor}/>
          <Column field='weighing' header='Ponderación' editor={weigEditor}/>
          <Column field='objective' header='Objetivo' editor={objEditor}/>
          <Column
          rowEditor
          headerStyle={{ width: '10%', minWidth: '8rem' }}
          bodyStyle={{ textAlign: 'center' }}
          style={{ width: '50px' }}/>
          <Column body={(rowData, options) => actionBodyTemplate(options.rowIndex)} exportable={false} style={{ minWidth: '12rem' }}></Column>

        </DataTable>
      </Dialog>
    </div>
  );
};

RiosTable.propTypes = {
  rios: PropTypes.arrayOf(PropTypes.object).isRequired,
};

