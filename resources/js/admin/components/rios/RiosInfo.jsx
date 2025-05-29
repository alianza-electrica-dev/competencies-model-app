/* eslint-disable react/prop-types */
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export const RiosInfo = (props) => {
  return (
    <>
      <h1>Responsabilidades</h1>
      <DataTable value={props.dataRespo} tableStyle={{ minWidth: '30rem' }}>
        <Column field="responsability" header="Responsabilidad" />
      </DataTable>
    </>
  );
};
