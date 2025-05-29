import PropTypes from 'prop-types';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import {useState} from 'react'
import { headerTemplate, footerTemplate } from "./Riotemplates";

export const Riotable = ({
  tableData,
  tableHeader,
  tableColumns,
  filters,
  children,
}) => {
  /* const [customers, setCustomers] = useState([]); */
  const [expandedRows, setExpandedRows] = useState([]);

  return (
    <Card header={tableHeader} style={{ height: '100%' }}>
      <DataTable
        value={tableData}
        tableStyle={{ minWidth: '50rem' }}
        emptyMessage='No existe ningun registro'
        rowGroupMode="subheader"
/*         groupRowsBy="period"
        expandableRowGroups 
        expandedRows={expandedRows} 
        onRowToggle={(e) => setExpandedRows(e.data)}
        sortMode="single" 
        sortField="period" 
        rowGroupHeaderTemplate={headerTemplate}
        rowGroupFooterTemplate={footerTemplate}  */
      >
        {tableColumns.map(colum =>
            <Column
              key={colum.header}
              header={colum.header}
              body={colum.body}
            />
          )}
        {children}
      </DataTable>
    </Card>
  );
};

Riotable.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableHeader: PropTypes.node.isRequired,
  tableColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

