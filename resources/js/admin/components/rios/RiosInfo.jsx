import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



export const RiosInfo = () => {
  
  return (
    <>
      <h1>Responsabilidades</h1>
      <DataTable value={""} tableStyle={{ minWidth: '30rem' }}>
        <Column field="" header="Responsabilidad" />
      </DataTable>
    </>
  );
};
