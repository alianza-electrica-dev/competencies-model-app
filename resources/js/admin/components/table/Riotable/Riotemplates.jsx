import { InputText } from 'primereact/inputtext'

    const calculateCalif = (compliance) => {
        let calif = 0;
        if (compliance !== null) {
          calif=calif+compliance
        }
        return calif;
    };
    
  export const headerTemplate = tableData => {
      return(
        <>
          {tableData.period}
        </>
      )
  };
  export const footerTemplate = tableData => {
    return (
      <>
        <td colSpan={5}>
          <div className="flex justify-content-end font-bold w-full">Calificación: {calculateCalif(tableData.weighing)}</div>
        </td>
      </>
    )
  }

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