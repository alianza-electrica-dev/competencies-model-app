import { Tag } from 'primereact/tag';


export const headerTemplate = tableData => {
  return <b className='text-black text-bold'>{tableData.period}</b>;
};

export function setSeverity(total){
  
  switch(true){
    case total>0 && total<=80:
      return 'danger'
    case  total>80 && total<=95:
      return 'warning'
    case total>95:
      return 'success'
    default:
      return 'info'
  } 
}

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

export const differenceTemplate = tableData => {
  return (
    <>
      {tableData.difference === null ? (
        <Tag value='Sin Asignar' severity='danger' />
      ) : (
        <span>{tableData.difference}</span>
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

export const responsTemplate = rowdata => {
  return <span>{rowdata.responsibility}</span>;
};

export const indicatorTemplate = rowdata => {
  return <span>{rowdata.indicator}</span>;
};

export const weighingTemplate = rowdata => {
  return <span>{rowdata.weighing}</span>;
};
export const objectiveTemplate = rowdata => {
  return <span>{rowdata.objective}</span>;
};

export const periodTemplate = rowdata => {
  return <span>{rowdata.period}</span>;
};

export const editTemplate = rowdata => {
  return '';
};
