import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import { InputNumber } from 'primereact/inputnumber';
import { InputText } from 'primereact/inputtext';
import { headerTemplate, footerTemplate, allowEdit } from './Riotemplates';
import { Loading } from '../../../../common';
import { useRioMutation } from '../../../../../js/hooks';
import {
  realTemplate,
  complianceTemplate,
  observationsTemplate,
} from '../../table/Riotable/Riotemplates';

export const Riotable = ({
  tableData,
  tableHeader,
  tableColumns,
  tableEditColumns,
  filters,
  children,
}) => {
  const [expandedRows, setExpandedRows] = useState([]);
  const { isPending, mutate } = useRioMutation('admin.rios.update_rio');

  if (isPending) {
    return <Loading />;
  }

  const realEditor = data => {
    return (
      <InputNumber
        inputId='minmax-buttons'
        value={data.value}
        onValueChange={e => data.editorCallback(e.value)}
        mode='decimal'
        showButtons
        min={0}
        max={100}
      />
    );
  };

  const complianceEditor = data => {
    return (
      <InputNumber
        inputId='minmax-buttons'
        value={data.value}
        onValueChange={e => data.editorCallback(e.value)}
        mode='decimal'
        showButtons
        min={0}
        max={100}
      />
    );
  };

  const observationsEditor = data => {
    return (
      <InputText
        type='text'
        value={data.value}
        onChange={e => data.editorCallback(e.target.value)}
        className='p-inputtext-sm'
      />
    );
  };

  const onRowEditComplete = e => {
    const newObject = {
      id: e.newData.id,
      real: e.newData.real,
      compliance: e.newData.compliance,
      observations: e.newData.observations,
    };
    mutate({ request: newObject, params: e.newData.id });
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
          key='Real'
          header='Real'
          body={realTemplate}
          editor={data => realEditor(data)}
        />
        <Column
          key='Cumplimiento'
          header='Cumplimiento'
          body={complianceTemplate}
          editor={data => complianceEditor(data)}
        />
        <Column
          key='Observaciones'
          header='Observaciones'
          body={observationsTemplate}
          editor={data => observationsEditor(data)}
        />
        <Column
          rowEditor={allowEdit}
          headerStyle={{ width: '10%', minWidth: '8rem' }}
          bodyStyle={{ textAlign: 'center', color: 'green' }}
        ></Column>
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
