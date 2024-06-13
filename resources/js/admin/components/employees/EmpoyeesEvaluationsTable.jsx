import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { employeesEvaluationsColumns } from '../../helpers';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

const getSeverity = status => {
  switch (status) {
    case 1:
      return 'danger';

    case 2:
      return 'warning';

    case 3:
      return 'success';
  }
};

const statusBodyTemplate = rowData => {
  return (
    <Tag
      value={rowData.pivot.status.name}
      severity={getSeverity(rowData.pivot.status_id)}
    />
  );
};

export const EmpoyeesEvaluationsTable = ({ evaluations }) => {
  return (
    <Card title='Evaluaciones - Competencias' style={{ height: '100%' }}>
      <DataTable value={evaluations} tableStyle={{ minWidth: '50rem' }}>
        {employeesEvaluationsColumns.map(colum => (
          <Column
            key={colum.field}
            field={colum.field}
            header={colum.header}
            body={
              colum.header === 'Estatus de la evaluacion'
                ? statusBodyTemplate
                : null
            }
          />
        ))}
        <Column header='' body={<Button label='Revisar evaluación' />} />
        <Column header='' body={<Button label='Asignar evaluación' />} />
      </DataTable>
    </Card>
  );
};

EmpoyeesEvaluationsTable.propTypes = {
  evaluations: PropTypes.arrayOf(PropTypes.object).isRequired,
};
