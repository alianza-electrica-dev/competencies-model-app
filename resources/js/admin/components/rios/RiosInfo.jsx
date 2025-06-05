/* eslint-disable react/prop-types */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { RiosTable } from './RiosTable';
import { Button } from 'primereact/button';
import { useState } from 'react'

export const RiosInfo = ({ formik, formikReplace, formikRemove , pending }) => {
  const [total,setTotal]=useState(0)
  const footerTemplate = () => {
    setTotal(formik.values.rios
      ?.map(item => item?.weighing)
      .reduce((acc, weighing) => acc + weighing, 0))
    return (
      <td colSpan='2'>
        <div className='flex justify-content-end font-bold w-full'>
          Total: {total} %
        </div>
      </td>
    );
  };
  const validTotal = (number) =>{
    if(number=== 100){
      return false
    }else{
      return true
    }
  }
  return (
    <>
      <h1>Borrador de envío</h1>
        <DataTable
          value={formik.values.rios}
          tableStyle={{ minWidth: '20rem', minHeight:'27rem' }}
          footer={footerTemplate}
          scrollable
          scrollHeight='450px'
          emptyMessage='No existen elementos en espera'
        >
          <Column field='responsability' header='Responsabilidad' />
          <Column field='weighing' header='Ponderación' />
        </DataTable>
        <div className='flex my-4 flex justify-content-center'>
          <div className='mx-3'>
            <RiosTable rios={formik} forkRep={formikReplace} forkRem={formikRemove} />
          </div>
          <div className='mx-3'>
            <Button
            label='Guardar Rio'
            className='btn-primary hover:surface-500'
            icon='pi pi-save'
            loading={pending}
            disabled={validTotal(total)}
          />
          </div>
        </div>
    </>
  );
};
