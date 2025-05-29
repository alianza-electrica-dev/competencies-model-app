import { InputText } from 'primereact/inputtext';

export const calculateCalif = Data => {
  const calif = 17;
  console.log(Data);
  return calif;
};

<<<<<<< HEAD
  export const realTemplate = tableData => {
      return(
        <>
          {tableData.real === null ? 
            <InputText value={""} className="p-inputtext-sm" placeholder="Añadir Real" onChange={() => ""} />
          :
           <span>{tableData.real}</span> 
        }
        </>
      )
  }
    export const complianceTemplate = tableData => {
      return(
        <>
          {tableData.compliance === null ? 
            <InputText value={""} className="p-inputtext-sm" placeholder="Añadir Cumplimiento" onChange={() => ""} />
            
          :
           <span>{tableData.compliance}</span> 
        }
        </>
      )
  }
    export const observationsTemplate = tableData => {
      return(
        <>
          {tableData.observations === null ? 
            <InputText value={""} className="p-inputtext-sm" placeholder="Añadir Observaciones" onChange={() => ""} />
          :
           <span>{tableData.observations}</span> 
        }
        </>
      )
     
  }
    export const responsTemplate = rowdata => {
      const ultimo = rowdata.data_rios.slice(-1)[0]
      return (
        <span>{'ultimo'}</span>
      )
    } 
=======
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
        <InputText
          value={''}
          className='p-inputtext-sm'
          placeholder='Añadir Real'
          onChange={() => ''}
        />
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
        <InputText
          value={''}
          className='p-inputtext-sm'
          placeholder='Añadir Cumplimiento'
          onChange={() => ''}
        />
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
        <InputText
          value={''}
          className='p-inputtext-sm'
          placeholder='Añadir Observaciones'
          onChange={() => ''}
        />
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

export const periodTemplate = rowdata => {
  return <span>{rowdata.period}</span>;
};
>>>>>>> accb0d87a1f6f25fb0f3786b5800a014e14bab2f
