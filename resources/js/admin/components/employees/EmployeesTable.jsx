import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { employeesColumns } from '../../helpers';
import { LinkButton } from '../table/LinkButton';
import { EmployeesAssignation } from './EmployeesAssignation';

export const EmployeesTable = ({ employees }) => {
  return (
    <Card title='Empleados' style={{ height: '100%' }}>
      <DataTable value={employees} tableStyle={{ minWidth: '50rem' }}>
        {employeesColumns.map(colum => (
          <Column key={colum.field} field={colum.field} header={colum.header} />
        ))}
        <Column
          header=''
          body={rowData => (
            <LinkButton
              rowData={rowData}
              icon='pi pi-file'
              tooltipText='Evaluaciones'
            />
          )}
        />
        <Column
          header=''
          body={rowData => <EmployeesAssignation rowData={rowData}/>}
        />
      </DataTable>
    </Card>
  );
};

EmployeesTable.propTypes = {
  employees: PropTypes.array.isRequired,
};
