import { realTemplate, complianceTemplate, observationsTemplate } from "../../components/table/Riotable/Riotemplates";
export const employeesRioColumns = [
  { field: 'responsibility', header: 'Responsabilidad', body: ''},
  { field: 'indicator', header: 'Indicador', body: ''},
  { field: 'weighing', header: 'Ponderación', body: '' },
  { field: 'real', header: 'Real', body: realTemplate },
  { field: 'compliance', header: 'Cumplimiento', body: complianceTemplate },
  { field: 'observations', header: 'Observaciones', body: observationsTemplate },
];
