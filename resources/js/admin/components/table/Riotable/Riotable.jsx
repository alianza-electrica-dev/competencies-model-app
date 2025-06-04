import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { headerTemplate } from './Riotemplates';
import { Loading } from '../../../../common';
import { useRioMutation } from '../../../../../js/hooks';
import { Tag } from 'primereact/tag';
import {
  realTemplate,
  complianceTemplate,
  observationsTemplate,
  differenceTemplate,
  setSeverity,
} from '../../table/Riotable/Riotemplates';

import { InputTextarea } from 'primereact/inputtextarea';

export const Riotable = ({
  tableData,
  tableHeader,
  tableColumns,
  children,
}) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const { isPending, mutate } = useRioMutation(
    'admin.rios.update_rio',
    'EmployeesRios',
  );
  const [errors, setErrors] = useState({});

  if (isPending) {
    return <Loading />;
  }

  const realEditor = data => {
    const errorKey = data.rowData.id + '-' + data.field;
    return (
      <>
        <InputNumber
          inputId='minmax-buttons'
          value={data.value}
          onValueChange={e => data.editorCallback(e.value)}
          mode='decimal'
          showButtons
          invalid={errors[errorKey]}
          inputStyle={{ width: '55px' }} 
          min={0} 
          max={100}
        />
        {errors[errorKey] && (
          <div>
            <small className='text-red-600'>
              {errors[errorKey]}
            </small>
          </div>
        )}
      </>
    );
  };

   const differenceEditor = data => {
    const errorKey = data.rowData.id + '-' + data.field;
    return (
      <>
        <InputNumber
          inputId='minmax-buttons'
          value={data.value}
          onValueChange={e => data.editorCallback(e.value)}
          mode='decimal'
          showButtons
          invalid={errors[errorKey]}
          inputStyle={{ width: '55px' }} 
          min={0} 
          max={100}
        />
        {errors[errorKey] && (
          <div>
            <small className='text-red-600'>
              {errors[errorKey]}
            </small>
          </div>
        )}
      </>
    );
  };

  const complianceEditor = data => {
    const errorKey = data.rowData.id + '-' + data.field;
    return (
      <>
      <div className=''>
        <InputNumber
          inputId='minmax-buttons'
          value={data.value}
          onValueChange={e => data.editorCallback(e.value)}
          mode='decimal'
          showButtons
          invalid={errors[errorKey]}  
          inputStyle={{ width: '55px' }}  
          min={0}   
          max={100}
        />
        {errors[errorKey] && (
          <div>
            <small className='text-red-600'>
              {errors[errorKey]}
            </small>
          </div>
        )}
      </div>
      </>
    );
  };

  const observationsEditor = data => {
    const errorKey = data.rowData.id + '-' + data.field;
    return (
      <>
        <InputTextarea
          value={data.value}
          onChange={e => data.editorCallback(e.target.value)}
          rows={5}
          cols={40}
          autoResize
          invalid={errors[errorKey]}
        />
        {errors[errorKey] && (
          <div>
            <small className='text-red-600'>
              {errors[errorKey]}
            </small>
          </div>
        )}
      </>
    );
  };

  const onRowEditComplete = e => {
    const { originalEvent, newData, data } = e;
    const newObject = {
      id: newData.id,
      real: newData.real,
      difference:newData.difference,
      compliance: newData.compliance,
      observations: newData.observations,
    };

    let errors = {};

    console.log(data)

    if (newObject.real < 0 || newObject.real > data.weighing) {
      errors = {
        ...errors,
        [data.id + '-' + 'real']: 'El número solo puede estar entre 0 y '+ data.weighing,
      };
    }
    if (newObject.real === null) {
      errors = {
        ...errors,
        [data.id + '-' + 'real']: 'Este campo no puede estar vacio',
      };
    }
    if (newObject.difference < 0) {
      errors = {
        ...errors,
        [data.id + '-' + 'difference']: 'El número no puede ser menor que 0',
      };
    }
    if (newObject.difference === null) {
      errors = {
        ...errors,
        [data.id + '-' + 'difference']: 'Este campo no puede estar vacio',
      };
    }
    if (newObject.compliance < 0 || newObject.compliance > data.weighing) {
      errors = {
        ...errors,
        [data.id + '-' + 'compliance']: 'El número solo puede estar entre 0 y '+ data.weighing,
      };
    }
    if (newObject.compliance === null) {
      errors = {
        ...errors,
        [data.id + '-' + 'compliance']: 'Este campo no puede estar vacio',
      };
    }
    if (newObject.observations === '') {
      errors = {
        ...errors,
        [data.id + '-' + 'observations']: 'Este campo no puede estar vacio',
      };
    }

    console.log(errors);
    if (Object.keys(errors).length === 0) {
      setErrors({});
      mutate({ request: newObject, params: e.newData.id });
    } else {
      setErrors(errors);
      originalEvent.preventDefault();
      throw new Error('Error de validación');
    }
  };

  const footerTemplate = data => {
    let total = 0;
    if (data.period === 'Periodo de Enero a Junio') {
      total = tableData
        .filter(
          item =>
            item.period === 'Periodo de Enero a Junio' && item.real !== null,
        )
        .reduce((acc, item) => acc + item.real, 0);
    } else {
      total = tableData
        .filter(
          item =>
            item.period === 'Periodo de Julio a Diciembre' &&
            item.real !== null,
        )
        .reduce((acc, item) => acc + item.real, 0);
    }
    return (
      <td colSpan={7}>
        <div className='flex justify-content-end font-bold w-full'>
          Calificación:
          <Tag value={total} severity={setSeverity(total)} />
        </div>
      </td>
    );
  };

  return (
    <Card header={tableHeader} style={{ height: '100%' }}>
      <DataTable
        value={tableData}
        tableStyle={{ minWidth: '50rem' }}
        emptyMessage='No existe ningun registro'
        rowGroupMode='subheader'
        groupRowsBy='period'
        expandableRowGroups
        expandedRows={expandedRows}
        onRowToggle={e => setExpandedRows(e.data)}
        sortMode='single'
        sortField='period'
        sortOrder={1}
        rowGroupHeaderTemplate={headerTemplate}
        rowGroupFooterTemplate={footerTemplate}
        editMode='row'
        onRowEditComplete={onRowEditComplete}
      >
        {tableColumns.map(colum => (
          <Column key={colum.header} header={colum.header} body={colum.body} />
        ))}
        <Column
          field='real'
          header='Real'
          body={realTemplate}
          editor={realEditor}
          style={{ width: '120px' }}
        />
        <Column
          field='difference'
          header='Diferencia'
          body={differenceTemplate}
          editor={differenceEditor}
          style={{ width: '120px' }}
        />
        <Column
          field='compliance'
          header='Cumplimiento'
          body={complianceTemplate}
          editor={complianceEditor}
        />
        <Column
          field='observations'
          header='Observaciones'
          body={observationsTemplate}
          editor={observationsEditor}
        />
        <Column
          rowEditor
          headerStyle={{ width: '10%', minWidth: '8rem' }}
          bodyStyle={{ textAlign: 'center', color: 'green' }}
        />
        {children}
      </DataTable>
    </Card>
  );
};

Riotable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeader: PropTypes.node.isRequired,
  tableColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableEditColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

