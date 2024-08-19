import PropTypes from 'prop-types';
import { TableStatusTemplate } from './';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';

export const AdminTable = ({
  tableData,
  tableHeader,
  tableColumns,
  filters,
  children,
}) => {
  return (
    <Card header={tableHeader} style={{ height: '100%' }}>
      <DataTable
        value={tableData}
        paginator
        rows={5}
        tableStyle={{ minWidth: '50rem' }}
        filters={filters}
        filterDisplay='row'
        emptyMessage='No existe ningun registro'
      >
        {tableColumns.map(colum =>
          colum.field === 'pivot.status.name' ? (
            <Column
              key={colum.field}
              field={colum.field}
              filter
              filterPlaceholder={`Buscar por ${colum.header.toLowerCase()}`}
              header={colum.header}
              body={rowData => <TableStatusTemplate rowData={rowData} />}
            />
          ) : (
            <Column
              key={colum.field}
              field={colum.field}
              filter
              filterPlaceholder={`Buscar por ${colum.header.toLowerCase()}`}
              header={colum.header}
            />
          ),
        )}
        {children}
      </DataTable>
    </Card>
  );
};

AdminTable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeader: PropTypes.node.isRequired,
  tableColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};
