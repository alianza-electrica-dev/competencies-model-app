import { InputText } from 'primereact/inputtext'
 
   
 export const calculateCalif = (Data) => {
    const calif=17
    console.log(Data)
    return calif
  }

    
  export const headerTemplate = tableData => {
      return(
        <>
          {tableData.period}
        </>
      )
  };
  export const footerTemplate = tableData => {
    const calificacion = calculateCalif(tableData.compliance)
    return (
      <>
        <td colSpan={7}>
          <div className="flex justify-content-end font-bold w-full">Calificación:{calificacion}</div>
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