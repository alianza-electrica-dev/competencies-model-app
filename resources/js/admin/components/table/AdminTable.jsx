import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { managersColumns } from '../../helpers/columns';

export const AdminTable = ({ tableData, tableHeader, children }) => {
  return (
    <Card header={tableHeader} style={{ height: '100%' }}>
      <DataTable
        value={tableData}
        paginator
        rows={5}
        tableStyle={{ minWidth: '50rem' }}
      >
        {managersColumns.map(colum => (
          <Column key={colum.field} field={colum.field} header={colum.header} />
        ))}
        {children}
      </DataTable>
    </Card>
  );
};

AdminTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeader: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
