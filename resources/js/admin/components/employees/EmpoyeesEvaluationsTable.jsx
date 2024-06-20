import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { employeesEvaluationsColumns } from '../../helpers';
import { TableStatusTemplate } from '../table';
import { Test } from './Test';

export const EmpoyeesEvaluationsTable = ({ evaluations }) => {
  return (
    <Card title='Evaluaciones - Competencias' style={{ height: '100%' }}>
      <DataTable
        value={evaluations}
        paginator
        rows={5}
        tableStyle={{ minWidth: '50rem' }}
      >
        {employeesEvaluationsColumns.map(colum => (
          <Column
            key={colum.field}
            field={colum.field}
            header={colum.header}
            body={
              colum.header === 'Estatus de la evaluacion'
                ? rowData => <TableStatusTemplate rowData={rowData} />
                : null
            }
          />
        ))}
        <Column
          header=''
          body={rowData => (
            <Test questions={rowData.questions} test={rowData} />
          )}
        />
      </DataTable>
    </Card>
  );
};

EmpoyeesEvaluationsTable.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
