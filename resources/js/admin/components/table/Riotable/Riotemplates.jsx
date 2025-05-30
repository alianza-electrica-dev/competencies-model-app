import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
export const calculateCalif = Data => {
  const calif = 17;
  return calif;
};

export const headerTemplate = tableData => {
  return <>{tableData.period}</>;
};

export const footerTemplate = tableData => {
  const calificacion = calculateCalif(tableData.compliance);
  return (
    <>
      <td colSpan={7}>
        <div className='flex justify-content-end font-bold w-full'>
          Calificación:{calificacion}
        </div>
      </td>
    </>
  );
};

export const realTemplate = tableData => {
  return (
    <>
      {tableData.real === null ? (
        <Tag value='Sin Asignar' severity='danger' />
      ) : (
        <span>{tableData.real}</span>
      )}
    </>
  );
};

export const complianceTemplate = tableData => {
  return (
    <>
      {tableData.compliance === null ? (
        <Tag value='Sin Asignar' severity='danger' />
      ) : (
        <span>{tableData.compliance}</span>
      )}
    </>
  );
};

export const observationsTemplate = tableData => {
  return (
    <>
      {tableData.observations === null ? (
        <Tag value='Sin Asignar' severity='danger' />
      ) : (
        <span>{tableData.observations}</span>
      )}
    </>
  );
};

export const actionBodyTemplate = rowData => {
  return (
    <>
      <Button
        icon='pi pi-pencil'
        rounded
        outlined
        className='mr-2'
        onClick={() => ''}
      />
      <Button
        icon='pi pi-trash'
        rounded
        outlined
        severity='danger'
        onClick={() => ''}
      />
    </>
  );
};

export const allowEdit = () => {
  return true;
};

export const responsTemplate = rowdata => {
  return <span>{rowdata.responsibility}</span>;
};

export const indicatorTemplate = rowdata => {
  return <span>{rowdata.indicator}</span>;
};

export const weighingTemplate = rowdata => {
  return <span>{rowdata.weighing}</span>;
};

export const periodTemplate = rowdata => {
  return <span>{rowdata.period}</span>;
};

export const editTemplate = rowdata => {
  return '';
};
